import { connection } from "./connection"

export const deleteRecipeSQL = async (id: string): Promise<void> => {
  await connection('P_cookenu_Recipes').where({id}).del()
}