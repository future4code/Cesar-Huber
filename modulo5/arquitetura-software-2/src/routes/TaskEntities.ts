import { app } from "../controller/app"

export default class TaskEntities {
  static createTask = app.post('/task')
  static getTaskById = app.get('/task/:id')
}
