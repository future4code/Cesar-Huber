import { User } from "../types";
import { connection } from "./connection";


export const getUserByEmail = async (email: string): Promise<User> => {
  const [result] = await connection('A_Users').where({ email })
  return result
}