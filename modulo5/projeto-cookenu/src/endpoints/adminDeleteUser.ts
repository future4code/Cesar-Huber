import { Request, Response } from "express";
import { deleteUserSQL } from "../data/deleteUserSQL";
import { getUserById } from "../data/getUserById";
import { ROLES } from "../entities/classes";
import { getData } from "../services/tokenManager";

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization
    const {userId} = req.body

    if (!token) {
      errorCode = 422
      throw new Error('Only logged users are allowed to post recipes')
    }

    const data = getData(token)

    if (data.role.toUpperCase() !== ROLES.ADMIN) {
      errorCode = 401
      throw new Error('Only ADMIN users are allowed to perform this action')
    }

    if (!userId) {
      errorCode = 422
      throw new Error('User ID is required to perform this action')
    }

    const userExists = await getUserById(userId)

    if (!userExists) {
      errorCode = 404
      throw new Error('User ID not found')
    }

    await deleteUserSQL(userId)

    res.status(200).send({message: 'User deleted successfully'})
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}