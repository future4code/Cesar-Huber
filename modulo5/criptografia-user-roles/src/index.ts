import app from "./app"
import { createUser } from "./endpoints/createUser"
import { getUserProfile } from "./endpoints/getUserProfile"
import { userLogin } from "./endpoints/userLogin"

app.post('/user/signup', createUser)

app.post('/user/login', userLogin)

app.get('/user/profile', getUserProfile)