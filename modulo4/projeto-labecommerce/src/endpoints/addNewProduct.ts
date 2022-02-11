import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";


export const addNewProduct = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { name, price, imageUrl } = req.body
    const id = 'p' + Date.now().toString()

    if (!name || !price) {
      errorCode = 422
      throw new Error('É ncessário preencher todos os campos obrigatórios (name e price). Verifique e tente novamente.')
    }

    const newProduct: Product = {
      id,
      name,
      price,
      image_url: imageUrl
    }

    await connection('P_labecommerce_Products').insert(newProduct)

    res.status(201).send('Produto cadastrado com sucesso!')

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}