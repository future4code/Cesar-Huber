import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const user_id = req.params.user_id

    const userPurchases = await connection('P_labecommerce_Purchases').where('user_id', user_id)

    res.status(200).send(userPurchases)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}