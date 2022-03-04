import app from "./app";
import { createUser } from "./endpoints/createUser";
import { getUserInfo } from "./endpoints/getUserInfo";
import { userLogin } from "./endpoints/userLogin";

app.post('/user/signup', createUser)

app.post('/user/login', userLogin)

app.get('/user/profile', getUserInfo)