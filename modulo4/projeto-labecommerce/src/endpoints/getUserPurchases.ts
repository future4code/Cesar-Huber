import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const user_id = req.params.user_id

    const checkUserId = await connection('P_labecommerce_Users').where('id', user_id)

    if (checkUserId.length === 0) {
      errorCode = 404
      throw new Error('ID do usuário não encontrado.')
    }

    let itemsPurchased = await connection.raw(`
      SELECT 
      PP.name, 
      IP.quantity,
      PP.price
      FROM P_labecommerce_Items_Purchased IP
      INNER JOIN P_labecommerce_Purchases P ON IP.purchase_id = P.id
      INNER JOIN P_labecommerce_Products PP ON IP.product_id = PP.id
      WHERE P.user_id = '${user_id}';
    `)

    itemsPurchased = itemsPurchased[0]

    const userPurchases = {
      itemsPurchased
    }

    res.status(200).send(userPurchases)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}