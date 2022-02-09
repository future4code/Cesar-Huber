import express, { Request, Response } from 'express'
import cors from 'cors'
import { connection } from './data/connection'
import { AddressInfo } from 'net'
import { createUser } from './endpoints/createUser'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/users', createUser)



// servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
