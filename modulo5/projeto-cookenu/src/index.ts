import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { getUserProfile } from "./endpoints/getUserProfile"
import { adminGetUserProfiles } from "./endpoints/adminGetUserProfiles"
import { postRecipe } from "./endpoints/postRecipe"
import { userLogin } from "./endpoints/userLogin"
import { adminGetRecipes } from "./endpoints/adminGetRecipes"

app.post('/user/signup', createUser)

app.post('/user/login', userLogin)

app.get('/user/profile', getUserProfile)

app.get('/user/:id', adminGetUserProfiles)

app.get('/user', adminGetUserProfiles)

app.post('/recipes', postRecipe)

app.get('/recipes', adminGetRecipes)

// app.post('/user/:userid/follow', followUser)