import { Temporal } from "@js-temporal/polyfill";
import { Request, Response } from "express";
import { getRecipeById } from "../data/getRecipeById";
import { updateRecipe } from "../data/updateRecipe";
import { Recipe } from "../entities/types";
import { getData } from "../services/tokenManager";

export const editRecipe = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization
    let { recipeId, title, description } = req.body

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    if (!recipeId || (!title && !description)) {
      errorCode = 422
      throw new Error('Recipe ID and Title or Description are required in order to update a recipe')
    }

    const recipeIsFromUser = await getRecipeById(recipeId)

    if (!recipeIsFromUser) {
      errorCode = 404
      throw new Error('Recipe not found')
    }

    if (recipeIsFromUser.user_id !== data.id) {
      errorCode = 401
      throw new Error('User is only authorized to edit his/her own recipes')
    }

    if (!title) title = recipeIsFromUser.title
    if (!description) description = recipeIsFromUser.description

    const currentDate = Temporal.Now.plainDateISO().toString()

    const editedRecipe: Recipe = {
      id: recipeId,
      user_id: data.id,
      title,
      description,
      createdAt: currentDate
    }

    await updateRecipe(editedRecipe)

    res.status(200).send({ message: 'Recipe edited successfully' })
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}