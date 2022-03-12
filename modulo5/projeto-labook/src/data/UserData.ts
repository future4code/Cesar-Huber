import { BefriendInputDTO } from "../models/DTOs"
import User from "../models/User"
import BaseDatabase from "./BaseDatabase"

export type QueryUser = {
  id: string,
  name: string,
  email: string,
  password: string
}

export default class UserData extends BaseDatabase {
  protected USERS_TABLE = 'P_labook_Users'
  protected FRIENDS_TABLE = 'P_labook_Friends'

  insert = async (user: User) => {
    try {
      await BaseDatabase
        .connection(this.USERS_TABLE)
        .insert(user)
    } catch (error) {
      throw new Error('Could not insert user into database')
    }
  }

  findByEmail = async (email: string): Promise<QueryUser> => {
    try {
      const [queryResult] = await BaseDatabase
        .connection(this.USERS_TABLE)
        .where({ email })
      return queryResult
    } catch (error) {
      throw new Error('Could not return user from database')
    }
  }

  findById = async (id: string): Promise<QueryUser> => {
    try {
      const [queryResult] = await BaseDatabase
        .connection(this.USERS_TABLE)
        .where({ id })
      return queryResult
    } catch (error) {
      throw new Error('Could not return user from database')
    }
  }

  insertFriend = async (befriend: BefriendInputDTO) => {
    try {
      await BaseDatabase
        .connection(this.FRIENDS_TABLE)
        .insert(befriend)
    } catch (error) {
      throw new Error('Could not insert friendship into database')
    }
  }

  deleteFriend = async (userId: string, friendId: string) => {
    try {
      await BaseDatabase
        .connection(this.FRIENDS_TABLE)
        .where({ user_id: userId, friend_id: friendId })
        .del()
    } catch (error) {
      throw new Error('Could not delete friendship from database')
    }
  }

}