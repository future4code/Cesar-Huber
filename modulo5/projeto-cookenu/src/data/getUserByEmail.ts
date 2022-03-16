import { User } from "../entities/classes"
import { connection } from "./connection"

export const getUserByEmail = async (email: string): Promise<User> => {
  const [user] = await connection('P_cookenu_Users').where({email})
  return user && User.toUserModel(user)
}