import { Recipe } from "../entities/types";
import { connection } from "./connection";

export const getRecipeById = async (id: string): Promise<Recipe> => {
  const [recipe] = await connection('P_cookenu_Recipes').where({id})
  return recipe
}