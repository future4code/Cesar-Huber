import { connection } from "./connection"
import { User } from "../types"

export const getUserById = async (id: string): Promise<User> => {
  const user = await connection('A_Users').where({ id })
  return user[0]
}