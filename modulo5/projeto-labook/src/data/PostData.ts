import { CommentInputDTO, LikeInputDTO } from "../models/DTOs"
import Post, { TYPE } from "../models/Post"
import BaseDatabase from "./BaseDatabase"

export type QueryPost = {
  id: string,
  user_id: string,
  picture: string,
  description: string,
  createdAt: string,
  type: TYPE
}

export type QueryFeedPost = {
  name: string,
  picture: string,
  description: string,
  createdAt: string,
  type: TYPE
}

export type QueryFeedPostByType = {
  name: string,
  picture: string,
  description: string,
  createdAt: string,
  type: TYPE
}

export default class PostData extends BaseDatabase {
  protected USERS_TABLE = 'P_labook_Users'
  protected POSTS_TABLE = 'P_labook_Posts'
  protected FRIENDS_TABLE = 'P_labook_Friends'
  protected LIKES_TABLE = 'P_labook_Likes'
  protected COMMENTS_TABLE = 'P_labook_Comments'

  insert = async (post: Post) => {
    try {
      await BaseDatabase
        .connection(this.POSTS_TABLE)
        .insert(post)
    } catch (error) {
      throw new Error('Could not insert post into database')
    }
  }

  findPostById = async (postId: string): Promise<QueryPost> => {
    try {
      const [queryResult] = await BaseDatabase
        .connection(this.POSTS_TABLE)
        .where({id: postId})
      return queryResult
    } catch (error) {
      throw new Error('Could not return post from database')
    }
  }

  getPostsFeed = async (userId: string, offset: number): Promise<QueryFeedPost[]> => {
    try {
      const queryResult = await BaseDatabase
        .connection.raw(`
          SELECT 
          U.name,
          P.picture,
          P.description,
          P.createdAt,
          P.type
          FROM ${this.POSTS_TABLE} P
          INNER JOIN ${this.FRIENDS_TABLE} F ON P.user_id = F.friend_id
          INNER JOIN ${this.USERS_TABLE} U ON F.friend_id = U.id
          WHERE F.user_id = '${userId}'
          ORDER BY P.createdAt DESC
          LIMIT 5
          OFFSET ${offset}
        ;`)
      return queryResult[0]
    } catch (error) {
      throw new Error('Could not return feed from database')
    }
  }

  getPostsFeedByType = async (type: TYPE, offset: number): Promise<QueryFeedPostByType[]> => {
    try {
      const queryResult = await BaseDatabase
        .connection.raw(`
          SELECT 
          U.name,
          P.picture,
          P.description,
          P.createdAt
          FROM ${this.POSTS_TABLE} P
          INNER JOIN ${this.USERS_TABLE} U ON P.user_id = U.id
          WHERE P.type = '${type}'
          ORDER BY P.createdAt DESC
          LIMIT 5
          OFFSET ${offset}
        ;`)
      return queryResult[0]
    } catch (error) {
      throw new Error('Could not return feed from database')
    }
  }

  likeExists = async (postId: string, userId: string): Promise<boolean> => {
    try {
      const [checkLike] = await BaseDatabase
        .connection(this.LIKES_TABLE)
        .where({'post_id': postId, 'user_id': userId})

      return checkLike
    } catch (error: any) {
      throw new Error('Could not check like')
    }
  }

  insertLike = async (like: LikeInputDTO) => {
    try {
      await BaseDatabase
        .connection(this.LIKES_TABLE)
        .insert(like)
    } catch (error) {
      throw new Error('Could not insert like into database')
    }
  }

  deleteLike = async (postId: string, userId: string) => {
    try {
      await BaseDatabase
        .connection(this.LIKES_TABLE)
        .where({post_id: postId, user_id: userId})
        .del()
    } catch (error) {
      throw new Error('Could not delete like from database')
    }
  }

  insertComment = async (comment: CommentInputDTO) => {
    try {
      await BaseDatabase
        .connection(this.COMMENTS_TABLE)
        .insert(comment)
    } catch (error) {
      throw new Error('Could not insert comment into database')
    }
  }
}