import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { getData } from "../services/token";


export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token: string = req.headers.authorization as string

    if (!token) {
      errorCode = 422
      throw new Error('É necessário informar o token no headers authorization')
    }

    const data = getData(token)

    if (data.role.toLowerCase() !== 'admin') {
      errorCode = 401
      throw new Error('Apenas usuários com role Admin podem acessar estas informações')
    }

    const profile = await getUserById(data.id)

    const userProfile = {
      id: profile.id,
      email: profile.email,
      role: profile.role
    }

    res.status(200).send(userProfile)

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}