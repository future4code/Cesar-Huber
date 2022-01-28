import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => { console.log('Servidor on na porta 3003') })

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})

enum UserType {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

const users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const userType: UserType = req.query.type as UserType
    const userName: string = req.query.name as string

    let result = users

    if (userType) result = users.filter(user => user.type === userType)

    if (userName) result = users.filter(user => user.name.includes(userName))
    
    res.send(result)
    
  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }

})

app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {name, email, type, age} = req.body
    const id: number = users[users.length - 1].id + 1

    if (!name || !email || !type || !age) {
      errorCode = 422
      throw new Error('Please check the fields!')
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(201).send({message: 'User created successfully!'})

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

// 4. a) mudar o método para PUT não altera em nada o funcionamento deste endpoint, pois irá adicionar um novo usuário do mesmo jeito. No entanto, semanticamente não faz sentido.
// b) pelo motivo descrito na a, não considero o PUT como um método apropriado para esta finalidade. Por isso, mantive o método POST. O PUT eu usaria no caso de alterar uma das propriedades de um usuário, como o type, de NORMAL para ADMIN por exemplo.