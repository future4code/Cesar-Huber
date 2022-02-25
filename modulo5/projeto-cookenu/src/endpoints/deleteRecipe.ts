import { Request, Response } from "express";
import { getRecipeById } from "../data/getRecipeById";
import { ROLES } from "../entities/classes";
import { getData } from "../services/tokenManager";
import { deleteRecipeSQL } from "../data/deleteRecipeSQL";

export const deleteRecipe = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization
    const { recipeId } = req.body

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    if (!recipeId) {
      errorCode = 422
      throw new Error('Recipe ID is required to perform this action')
    }

    const recipeIsFromUser = await getRecipeById(recipeId)

    if (!recipeIsFromUser) {
      errorCode = 404
      throw new Error('Recipe not found')
    }

    if (recipeIsFromUser.user_id !== data.id && data.role.toUpperCase() === ROLES.NORMAL) {
      errorCode = 401
      throw new Error('User is only authorized to delete his/her own recipes')
    }

    await deleteRecipeSQL(recipeId)

    res.status(200).send({message: 'Recipe deleted successfully'})
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}