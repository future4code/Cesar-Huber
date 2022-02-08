import { app } from "./app"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import { getAllUsers } from './endpoints/getAllUsers'
import { getUsersByType } from './endpoints/getUsersByType'

app.get("/recipes", getAllRecipes)
app.get('/users', getAllUsers)
app.get('/users/:type', getUsersByType)