import { USER_ROLES } from "./user"

export type signupInputDTO = {
  name: string,
  nickname: string,
  email: string,
  password: string,
  role: USER_ROLES
}