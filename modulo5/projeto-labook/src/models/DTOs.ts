import { TYPE } from "./Post"

export type SignupInputDTO = {
  name: string,
  email: string,
  password: string
}

export type LoginInputDTO = {
  email: string,
  password: string
}

export type NewPostInputDTO = {
  picture: string,
  description: string,
  type: TYPE
}

export type LikeInputDTO = {
  id: string,
  postId: string,
  userId: string
}

export type CommentInputDTO = {
  id: string,
  postId: string,
  userId: string,
  comment: string
}

export type BefriendInputDTO = {
  id: string,
  userId: string,
  friendId: string
}