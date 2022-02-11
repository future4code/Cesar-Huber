import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User, UserItemsPurchased, UsersPurchases } from "../types";


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const usersResult = await connection('P_labecommerce_Users')
    const purchasesResult = await connection('P_labecommerce_Items_Purchased')

    // let combinedResult = {}

    // for (let user of usersResult) {
    //   purchasesResult.indexOf(user => user.id === user.user_id)
    // }


    
    res.send('combinedResult')
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}