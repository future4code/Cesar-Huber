import { Request, Response } from "express";
import { getRecipeById } from "../data/getRecipeById";
import { getData } from "../services/tokenManager";

export const getRecipe = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization
    const recipeId = req.params.id

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    if (!recipeId) {
      errorCode = 422
      throw new Error('Recipe ID is required for this request')
    }

    const result = getRecipeById(recipeId)

    if (!result) {
      errorCode = 404
      throw new Error('Recipe ID not found')
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}