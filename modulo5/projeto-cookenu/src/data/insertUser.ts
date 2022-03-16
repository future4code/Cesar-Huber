import { User } from "../entities/classes";
import { connection } from "./connection";

export const insertUser = async (newUser: User): Promise<void> => {
  await connection('P_cookenu_Users').insert(newUser)
}