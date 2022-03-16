import { connection } from "./connection"

export const deleteUserSQL = async (id: string): Promise<void> => {
  await connection('P_cookenu_Followers').where({user_id: id}).del()
  await connection('P_cookenu_Recipes').where({user_id: id}).del()
  await connection('P_cookenu_Users').where({id}).del()
}