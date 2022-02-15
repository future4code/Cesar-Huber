import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Purchase, ItemPurchased } from "../types"

export const addNewPurchase = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { user_id, itemsPurchased } = req.body
    const id = 'up' + Date.now().toString()

    if (!user_id || !itemsPurchased) {
      errorCode = 422
      throw new Error('É ncessário preencher todos os campos obrigatórios (user_id e itemsPurchased). Verifique e tente novamente.')
    }

    const checkUserId = await connection('P_labecommerce_Users').where('id', user_id)

    if (checkUserId.length === 0) {
      errorCode = 404
      throw new Error('ID do usuário não encontrado.')
    }

    if (itemsPurchased.length === 0) {
      errorCode = 422
      throw new Error('É necessário informar os ids dos produtos e quantidades comprados.')
    }

    const newItemPurchased: ItemPurchased[] = []
    const productIdsPurchased: string[] = []

    for (let item of itemsPurchased) {
      newItemPurchased.push({
        purchase_id: id,
        ...item
      })

      productIdsPurchased.push(item.product_id)

      if (item.quantity < 1) {
        errorCode = 422
        throw new Error('A quantidade não pode ser menor ou igual a 0. Verifique e tente novamente.')
      }
    }

    const checkProductIds = await connection('P_labecommerce_Products').whereIn('id', productIdsPurchased)

    if (checkProductIds.length < itemsPurchased.length) {
      const qtd = itemsPurchased.length - checkProductIds.length
      let msg = `${qtd} ID de produto não foi encontrado. Verifique e tente novamente.`
      errorCode = 422
      if (qtd > 1) msg = `${qtd} IDs de produto não foram encontrados. Verifique e tente novamente.`
      throw new Error(msg)
    }

    await connection('P_labecommerce_Items_Purchased').insert(newItemPurchased)

    const totalPrice = await connection.raw(`
      SELECT sum(IP.quantity * P.price) as total_price FROM P_labecommerce_Items_Purchased IP
      INNER JOIN P_labecommerce_Products P on IP.product_id = P.id
      WHERE purchase_id = '${id}'
    `)

    const total_price = totalPrice[0][0].total_price

    const newPurchase: Purchase = {
      id,
      user_id,
      total_price: total_price
    }

    await connection('P_labecommerce_Purchases').insert(newPurchase)

    res.status(201).send('Compra registrada com sucesso!')

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}