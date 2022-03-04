import { Request, Response } from "express"
import { NewUser } from "../classes/NewUser"
import { getUserByEmail } from "../data/getUserByEmail"
import { insertUser } from "../data/insertUser"
import { generateHash } from "../services/hash"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/token"

export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { email, password, role } = req.body

    if (!email || !password || !role) {
      errorCode = 422
      throw new Error('É necessário informar email, password e role')
    }

    const checkEmail = await getUserByEmail(email)

    if (checkEmail) {
      errorCode = 409
      throw new Error('Este email já está cadastrado')
    }

    const id = generateId()

    const hashPassword: string = await generateHash(password)

    const newUser = new NewUser(id, email, hashPassword, role)

    await insertUser(newUser)

    const token = generateToken(
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