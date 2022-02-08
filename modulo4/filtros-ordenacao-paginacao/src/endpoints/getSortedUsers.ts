import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"

export const getSortedUsers = async (req: Request, res: Response): Promise<void> => {
  try {

    let sort: string = req.query.sort as string
    let order: string = req.query.order as string

    if (sort === "") sort = 'email'


    const rawUsers = 
      await connection('aula49_users')
        .orderBy(sort, order)

    const users = rawUsers.map(toUser)

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