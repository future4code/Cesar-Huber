import { Request, Response } from "express";
import { getFollower } from "../data/getFollower";
import { getUserById } from "../data/getUserById";
import { insertFollower } from "../data/insertFollower";
import { Follower } from "../entities/types";
import { generateId } from "../services/generateId";
import { getData } from "../services/tokenManager";

export const followUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization
    const followId: string = req.query.followId as string

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    if (!followId) {
      errorCode = 422
      throw new Error(`It's required to inform the user id to be followed`)
    }

    const userExists = await getUserById(followId)

    if (!userExists) {
      errorCode = 404
      throw new Error('User ID not found')
    }

    const isAlreadyFollowing = await getFollower(data.id, followId)

    if (isAlreadyFollowing) {
      errorCode = 409
      throw new Error('User already being followed')
    }

    const id = generateId()

    const follower: Follower = {
      id,
      user_id: data.id,
      follows_id: followId
    }

    await insertFollower(follower)

    res.status(201).send({message: 'User followed successfully'})

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}