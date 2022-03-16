import { Recipe } from "../entities/types";
import { connection } from "./connection";

export const insertRecipe = async (recipe: Recipe): Promise<void> => {
  await connection('P_cookenu_Recipes').insert(recipe)
}