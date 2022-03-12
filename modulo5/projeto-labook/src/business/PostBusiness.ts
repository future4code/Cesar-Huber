import { Temporal } from "@js-temporal/polyfill";
import PostData, { QueryPost } from "../data/PostData";
import UserData from "../data/UserData";
import { NewPostInputDTO } from "../models/DTOs";
import Post, { TYPE } from "../models/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export default class PostBusiness {
  constructor(
    private userData: UserData,
    private postData: PostData,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ){}

  newPost = async (input: NewPostInputDTO, token: string) => {
    const {picture, description, type} = input

    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }

    const data = this.authenticator.getTokenData(token)
    const userId = data.id

    const userIdExists = await this.userData.findById(userId)

    if (!userIdExists) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!picture || !description || !type) {
      throw new Error('All fields are required')
    }

    if (type.toUpperCase() !== TYPE.NORMAL.toUpperCase() && type.toUpperCase() !== TYPE.EVENT.toUpperCase()) {
      throw new Error(`Type must be either 'Normal' or 'Event'`)
    }

    const id = this.idGenerator.generateId()

    const createdAt = Temporal.Now.plainDateISO().toString()

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
    const userId = data.id

    const userIdExists = await this.userData.findById(userId)

    if (!postId) {
      throw new Error('Post ID must be informed to get post')
    }

    if (!userIdExists) {
      throw new Error('User not authorized. Try logging in again.')
    }

    return this.postData.findPostById(postId)

  }

}