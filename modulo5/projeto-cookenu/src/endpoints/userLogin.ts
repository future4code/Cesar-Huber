import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { validateEmail } from "../entities/isEmail";
import { compareHash } from "../services/hashManager";
import { generateToken } from "../services/tokenManager";

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const {email, password} = req.body

    if (!email || !password) {
      errorCode = 422
      throw new Error('All fields are required (email and password)')
    }

    if (!validateEmail(email)) {
      errorCode = 422
      throw new Error('Must be a valid email address')
    }

    const userInfo = await getUserByEmail(email)

    if (!userInfo) {
      errorCode = 404
      throw new Error('User email not found')
    }

    const isValidPassword = await compareHash(password, userInfo.getPassword())

    if (!isValidPassword) {
      errorCode = 401
      throw new Error('Invalid password')
    }

    const token = generateToken(
      {
        id: userInfo.getUserId(),
        role: userInfo.getUserRole()
      }
    )

    res.status(200).send(token)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}