import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    
    const result = await connection('P_labecommerce_Products')

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}