import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../services/token";
import { compareHash } from "../services/hash";


export const userLogin = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { email, password } = req.body

    if (!email || !password) {
      errorCode = 422
      throw new Error('É necessário informar email e password')
    }

    const userInfo = await getUserByEmail(email)

    if (!userInfo) {
      errorCode = 404
      throw new Error('Email não encontrado')
    }

    const compareResult: boolean = await compareHash(password, userInfo.password)

    if (!compareResult) {
      errorCode = 401
      throw new Error('Não autorizado. Senha inválida.')
    }

    const token = generateToken(
      {
        id: userInfo.id,
        role: userInfo.role
      }
    )

    res.status(200).send(token)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}