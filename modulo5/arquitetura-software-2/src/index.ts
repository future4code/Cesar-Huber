import { app } from './controller/app'
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'
import UserEntities from './routes/UserEntities'
import TaskEntities from './routes/TaskEntities'

app.use(UserEntities.signup, signup)
app.use(UserEntities.login, login)

app.use(TaskEntities.createTask, createTask)
app.use(TaskEntities.getTaskById, getTaskById)

