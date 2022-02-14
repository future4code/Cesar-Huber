import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
  try {

    const type: string = req.params.type as string

    const rawUsers = 
      await connection('aula49_users')
        .where('type', type)

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