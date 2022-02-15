import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User, UserItemsPurchased, UsersPurchases } from "../types";


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const usersResult: User[] = await connection('P_labecommerce_Users')
    let purchases = []
    let result: UsersPurchases[] = []

    for (let user of usersResult) {
      purchases = await connection.raw(`
        SELECT name, IP.quantity, price FROM P_labecommerce_Items_Purchased IP
        INNER JOIN P_labecommerce_Products P ON IP.product_id = P.id
        INNER JOIN P_labecommerce_Purchases PP ON IP.purchase_id = PP.id
        WHERE PP.user_id = '${user.id}'
      `)

      purchases = purchases[0]

      result.push({
        id: user.id,
        name: user.name, 
        email: user.email,
        password: user.password,
        purchases
      })
    }
    
    res.send(result)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}