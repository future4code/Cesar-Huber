import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { getUserProfile } from "./endpoints/getUserProfile"
import { adminGetUserProfiles } from "./endpoints/adminGetUserProfiles"
import { postRecipe } from "./endpoints/postRecipe"
import { userLogin } from "./endpoints/userLogin"
import { adminGetRecipes } from "./endpoints/adminGetRecipes"
import { getRecipe } from "./endpoints/getRecipe"
import { followUser } from "./endpoints/followUser"
import { unfollowUser } from "./endpoints/unfollowUser"
import { feed } from "./endpoints/feed"
import { editRecipe } from "./endpoints/editRecipe"
import { deleteUser } from "./endpoints/adminDeleteUser"
import { deleteRecipe } from "./endpoints/deleteRecipe"

app.get('/user/profile', getUserProfile)

app.get('/user/feed', feed)

app.get('/user/:id', adminGetUserProfiles)

app.get('/user', adminGetUserProfiles)

app.get('/recipes/:id', getRecipe)

app.get('/recipes', adminGetRecipes)

app.post('/user/signup', createUser)

app.post('/user/login', userLogin)

app.post('/user/follow', followUser)

app.post('/recipes', postRecipe)

app.put('/user/unfollow', unfollowUser)

app.put('/recipes', editRecipe)

app.delete('/user', deleteUser)

app.delete('/recipes', deleteRecipe)