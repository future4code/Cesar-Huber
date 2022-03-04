import { Request, Response } from "express";
import { getUserByEmail } from "../database/getUserByEmail";
import { generateToken } from "../services/generateToken";


export const userLogin = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { email, password } = req.body

    if (!email || !password) {
      errorCode = 422
      throw new Error('Email e/ou Senha não foram preenchidos.')
    }

    const user = await getUserByEmail(email)

    console.log(user)

    if (!user) {
      errorCode = 404
      throw new Error('Email não encontrado')
    }

    if (user.password !== password) {
      errorCode = 401
      throw new Error('Senha inválida')
    }

    const token = generateToken({
      id: user.id,
    })

    res.status(200).send({ token })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}