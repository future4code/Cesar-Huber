import { NewUser } from "../classes/NewUser"
import { connection } from "./connection"

export const insertUser = async (newUser: NewUser): Promise<void> => {
  await connection('A_Users')
    .insert(newUser)
}