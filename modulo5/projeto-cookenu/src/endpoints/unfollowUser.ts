import { Request, Response } from "express";
import { deleteFollower } from "../data/deleteFollower";
import { getFollower } from "../data/getFollower";
import { getUserById } from "../data/getUserById";
import { Follower } from "../entities/types";
import { getData } from "../services/tokenManager";

export const unfollowUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const token = req.headers.authorization
    const unfollowId: string = req.query.unfollowId as string

    if (!token) {
      errorCode = 422
      throw new Error('Token is required to be informed in headers authorization')
    }

    const data = getData(token)

    if (!unfollowId) {
      errorCode = 422
      throw new Error(`It's required to inform the user id to be unfollowed`)
    }

    const userExists = await getUserById(unfollowId)

    if (!userExists) {
      errorCode = 404
      throw new Error('User ID not found')
    }

    const userFollowed = await getFollower(data.id, unfollowId)

    if (!userFollowed) {
      errorCode = 409
      throw new Error('User not followed. Only followed users can be unfollowed')
    }

    const follower: Follower = {
      id: userFollowed.id,
      user_id: data.id,
      follows_id: unfollowId
    }

    await deleteFollower(follower)

    res.status(200).send({message: 'User unfollowed successfully'})

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
}