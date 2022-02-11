import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const order: string = req.query.order as string
    const search: string = req.query.search as string
    
    let result = await connection('P_labecommerce_Products')

    if (order && (order === 'asc' || order === 'desc')) result = await connection('P_labecommerce_Products').orderBy('name', order)

    if (search) result = await connection('P_labecommerce_Products').where('name', 'like', `%${search}%`)

    if (order && (order === 'asc' || order === 'desc') && search) result = await connection('P_labecommerce_Products').where('name', 'like', `%${search}%`).orderBy('name', order)

    if (result.length === 0) result = await connection('P_labecommerce_Products')

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}