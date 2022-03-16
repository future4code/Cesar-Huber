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
  post_id: string,
  user_id: string
}

export type CommentInputDTO = {
  id: string,
  post_id: string,
  user_id: string,
  comment: string
}

export type BefriendInputDTO = {
  id: string,
  user_id: string,
  friend_id: string
}