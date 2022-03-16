import { Request, Response } from "express";
import { getAllRecipes } from "../data/getAllRecipes";
import { ROLES } from "../entities/classes";
import { getData } from "../services/tokenManager";

export const adminGetRecipes = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token: string = req.headers.authorization as string

    if (!token) {
      errorCode = 422
      throw new Error('Only logged users are allowed to post recipes')
    }

    const data = getData(token)

    if (data.role.toUpperCase() !== ROLES.ADMIN) {
      errorCode = 401
      throw new Error('Only ADMIN users are allowed to access this information')
    }

    const result = await getAllRecipes()

    if (!result) {
      errorCode = 404
      throw new Error('No recipes')
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}