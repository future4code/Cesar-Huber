import { Recipe } from "../entities/types";
import { connection } from "./connection";

export const updateRecipe = async (recipe: Recipe): Promise<void> => {
  const id = {
    id: recipe.id
  }
  const updateColumns = {
    title: recipe.title,
    description: recipe.description,
    createdAt: recipe.createdAt
  }
  await connection('P_cookenu_Recipes').where(id).update(updateColumns)
}