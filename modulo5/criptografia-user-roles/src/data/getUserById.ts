import { User } from "../types";
import { connection } from "./connection";

export const getUserById = async (id: string): Promise<User> => {
  const [result] = await connection('A_Users').where({id})
  return result
}