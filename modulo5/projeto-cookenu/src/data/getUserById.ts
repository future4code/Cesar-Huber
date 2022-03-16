import { User } from "../entities/classes"
import { connection } from "./connection"

export const getUserById = async (id: string): Promise<User> => {
  const [user] = await connection('P_cookenu_Users').where({id})
  return user && User.toUserModel(user)
}