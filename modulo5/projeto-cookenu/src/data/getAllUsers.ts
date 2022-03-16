import { User } from "../entities/classes"
import { connection } from "./connection"

export const getAllUsers = async (): Promise<User[]> => {
  const result = await connection('P_cookenu_Users')
  return result
}