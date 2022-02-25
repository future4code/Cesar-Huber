import { Temporal } from "@js-temporal/polyfill";
import { Request, Response } from "express";
import { insertRecipe } from "../data/insertRecipe";
import { Recipe } from "../entities/types";
import { generateId } from "../services/generateId";
import { getData } from "../services/tokenManager";

export const postRecipe = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const {title, description} = req.body
    const token = req.headers.authorization

    if (!token) {
      errorCode = 401
      throw new Error('Only logged users are allowed to post recipes')
    }

    if (!title || !description) {
      errorCode = 422
      throw new Error('Title and Description are required in order to post a new recipe')
    }

    const data = getData(token)

    const id = generateId()

    const currentDate = Temporal.Now.plainDateISO().toString()

    const newRecipe: Recipe = {
      id,
      user_id: data.id,
      title,
      description,
      createdAt: currentDate
    } 

    await insertRecipe(newRecipe)

    res.status(201).send({message: 'Recipe posted successfully'})
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}