import { Temporal } from "@js-temporal/polyfill";
import PostData, { QueryFeedPost, QueryFeedPostByType, QueryPost } from "../data/PostData";
import UserData from "../data/UserData";
import { CommentInputDTO, LikeInputDTO, NewPostInputDTO } from "../models/DTOs";
import Post, { Message, TYPE } from "../models/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export default class PostBusiness {
  constructor(
    private userData: UserData,
    private postData: PostData,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) { }

  newPost = async (input: NewPostInputDTO, token: string) => {
    const { picture, description, type } = input

    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!picture || !description || !type) {
      throw new Error('All fields are required')
    }

    if (type.toUpperCase() !== TYPE.NORMAL.toUpperCase() && type.toUpperCase() !== TYPE.EVENT.toUpperCase()) {
      throw new Error(`Type must be either 'Normal' or 'Event'`)
    }

    const id = this.idGenerator.generateId()

    const createdAt = Temporal.Now.plainDateTimeISO().toString()

    const post = new Post(
      id,
      userId,
      picture,
      description,
      createdAt,
      type
    )

    await this.postData.insert(post)
  }

  findPostById = async (postId: string, token: string): Promise<QueryPost> => {

    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!postId) {
      throw new Error('Post ID must be informed to get post')
    }

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    return this.postData.findPostById(postId)

  }

  feed = async (token: string, page: number): Promise<QueryFeedPost[]> => {

    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!page) page = 1

    const offset = ((page - 1) * 5)

    const feed = await this.postData.getPostsFeed(userId, offset)

    return feed
  }

  feedByType = async (token: string, page: number, type: TYPE): Promise<QueryFeedPostByType[]> => {

    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!page) page = 1

    const offset = ((page - 1) * 5)

    if (!type) type = TYPE.NORMAL

    if (type !== TYPE.NORMAL && type !== TYPE.EVENT) {
      throw new Error(`Type must either be 'Normal' or 'Event'`)
    }

    const feed = await this.postData.getPostsFeedByType(type, offset)

    return feed
  }

  handleLike = async (postId: string, token: string): Promise<Message> => {

    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!postId) {
      throw new Error('Post ID must be informed to like post')
    }

    const likeExists = await this.postData.likeExists(postId, userId)

    let message = 'Liked post'

    if (!likeExists) {
      const id = this.idGenerator.generateId()
      const like: LikeInputDTO = {
        id,
        post_id: postId,
        user_id: userId
      }
      this.postData.insertLike(like)
    } else {
      this.postData.deleteLike(postId, userId)
      message = 'Unliked post'
    }

    return {message}
  }

  comment = async (postId: string, token: string, comment: string) => {
    
    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!postId) {
      throw new Error('Post ID must be informed to like post')
    }

    if (!comment) {
      throw new Error('Comment must have a non empty string')
    }

    const id = this.idGenerator.generateId()

    const commentDTO: CommentInputDTO = {
      id,
      post_id: postId,
      user_id: userId,
      comment
    }

    await this.postData.insertComment(commentDTO)

  }

}