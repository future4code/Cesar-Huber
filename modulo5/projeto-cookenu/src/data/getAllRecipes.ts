import { Recipe } from "../entities/types";
import { connection } from "./connection";

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const result = await connection('P_cookenu_Recipes')
  return result
};