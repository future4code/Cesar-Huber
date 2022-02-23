import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { insertUser } from "../data/insertUser";
import { checkPassword } from "../entities/checkPasswordCriteria";
import { User } from "../entities/classes";
import { validateEmail } from "../entities/isEmail";
import { generateId } from "../services/generateId";
import { generateHash } from "../services/hashManager";
import { generateToken } from "../services/tokenManager";


export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const {name, email, password, role} = req.body

    if (!name || !email || !password || !role) {
      errorCode = 422
      throw new Error('All fields are required (name, email, password and role)')
    }

    if (!validateEmail(email)) {
      errorCode = 422
      throw new Error('Must be a valid email address')
    }

    const checkEmail = await getUserByEmail(email)

    if (checkEmail) {
      errorCode = 409
      throw new Error('Email already being used')
    }

    if (role.toLowerCase() !== 'normal' && role.toLowerCase() !== 'admin') {
      errorCode = 422
      throw new Error('Role must be ADMIN or NORMAL')
    }

    if (!checkPassword(password)) {
      errorCode = 422
      throw new Error('Password must be at least 6 characters long, with lower AND upper case letters')
    }

    const id = generateId()

    const hashPassword = await generateHash(password)

    const newUser = new User(id, name, email, hashPassword, role)

    await insertUser(newUser)

    const token: string = generateToken(
      {
        id,
        role
      }
    )

    res.status(201).send(token)

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}