import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { getData } from "../services/tokenManager";

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token: string = req.headers.authorization as string

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    const result = await getUserById(data.id)

    const userProfile = result.getUserInfo()

    res.status(200).send(userProfile)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}