import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {

    const name: string = req.query.name as string
    const type: string = req.query.type as string
    let sort: string = req.query.sort as string
    let order: string = req.query.order as string
    let size: number = Number(req.query.size)
    let page: number = Number(req.query.page)

    if (!sort || sort === "") sort = 'email'
    if (!order || (order && order.toUpperCase() !== 'DESC')) order = 'ASC'
    if (!size) size = 5
    if (!page) page = 1
    const offset = (page-1)*size

    let rawUsers = await connection('aula49_users').orderBy(sort, order.toUpperCase()).limit(size).offset(offset)
    if (name) rawUsers = await connection('aula49_users').where('name', 'like', `%${name}%`).orderBy(sort, order.toUpperCase()).limit(size).offset(offset)

    if (type) rawUsers = await connection('aula49_users').where('type', type).orderBy(sort, order.toUpperCase()).limit(size).offset(offset)

    if (name && type) rawUsers = await connection('aula49_users').where('name', 'like', `%${name}%`).andWhere('type', type).orderBy(sort, order.toUpperCase()).limit(size).offset(offset)

    let users = rawUsers.map(toUser)

    res.status(200).send(users)

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}

const toUser = (input: any): User => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type
  }
}