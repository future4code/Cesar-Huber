import { connection } from "./connection"
import { User } from "../types"

export const getUserByEmail = async (email: string): Promise<User> => {
  const user = await connection('A_Users').where({ email })
  return user[0]
}