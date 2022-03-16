import { Request, Response } from "express";
import { getAllUsers } from "../data/getAllUsers";
import { getUserById } from "../data/getUserById";
import { ROLES } from "../entities/classes";
import { getData } from "../services/tokenManager";

export const adminGetUserProfiles = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const userId: string = req.params.id as string
    const token: string = req.headers.authorization as string

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    if (data.role.toUpperCase() !== ROLES.ADMIN) {
      errorCode = 401
      throw new Error('Only ADMIN users are allowed to access this information')
    }

    const usersResult = await getAllUsers()
    let result: any

    if (userId) {
      const userResult = await getUserById(userId)
      result = userResult
    } else{
      result = usersResult
    }

    if (!result) {
      errorCode = 404
      throw new Error('User ID not found')
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}