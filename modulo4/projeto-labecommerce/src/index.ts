import app from './app'
import { createUser } from './endpoints/createUser'
import { getAllUsers } from './endpoints/getAllUsers'
import { addNewProduct } from './endpoints/addNewProduct'
import { getAllProducts } from './endpoints/getAllProducts'
import { addNewPurchase } from './endpoints/addNewPurchase'
import { getUserPurchases } from './endpoints/getUserPurchases'

app.post('/users', createUser)

app.get('/users', getAllUsers)

app.post('/products', addNewProduct)

app.get('/products', getAllProducts)

app.post('/purchases', addNewPurchase)

app.get('/purchases/:user_id/purchases', getUserPurchases)