import { app } from "../controller/app"

export default class UserEntities {
  static signup = app.post('/user/signup')
  static login = app.post('/user/login')
}
