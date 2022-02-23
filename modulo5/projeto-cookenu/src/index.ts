import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { userLogin } from "./endpoints/userLogin"

app.post('/user/signup', createUser)

app.post('/user/login', userLogin)

// app.get('/user/profile', getUserProfile)

// app.post('/recipes', postRecipe)

// app.post('/user/:userid/follow', followUser)

// app.get('/recipes', getRecipes)