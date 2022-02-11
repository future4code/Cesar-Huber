import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const result: User[] = await connection('P_labecommerce_Users')
    
    res.send(result)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}