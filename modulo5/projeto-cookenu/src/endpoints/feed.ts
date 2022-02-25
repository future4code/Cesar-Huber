import { Request, Response } from "express";
import { getFeed } from "../data/getFeed";
import { getData } from "../services/tokenManager";

export const feed = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    const result = await getFeed(data.id)
    
    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}