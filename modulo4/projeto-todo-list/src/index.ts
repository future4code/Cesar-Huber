import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import connection from './connection'

const app = express()

app.use(express.json())
app.use(cors())

type User = {
  name: string,
  nickname: string,
  email: string
}

type Task = {
  id: string,
  title: string, 
  description: string, 
  due_date: string,
  creator_user_id: string
}

app.post('/users', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { name, nickname, email } = req.body
    const id = Date.now().toString()

    if (!name || !nickname || !email) {
      errorCode = 422
      throw new Error('Verifique se todas as informações necessárias foram preenchidas e tente novamente.')
    }

    await connection('P_todo_list_Users')
      .insert({
        id,
        name,
        nickname,
        email
      })

    res.status(201).send('Usuário criado com sucesso!')
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/users/:id', async (req: Request, res: Response): Promise<any> => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 422
      throw new Error('É necessário informar o id do usuário que está buscando.')
    }

    const result = await connection('P_todo_list_Users')
      .select('id', 'nickname')
      .where('id', id)

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.put('/users/:id', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = req.params.id
    let { name, nickname, email } = req.body

    if (!name) {name = undefined}
    if (!nickname) {nickname = undefined}
    if (!email) {email = undefined}

    const updates: User = {
      name,
      nickname,
      email
    }

    await connection('P_todo_list_Users')
      .where('id', id)
      .update(updates)

    res.status(201).send('Usuário alterado com sucesso.')
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.post('/tasks', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    let {title, description, dueDate, creatorUserId} = req.body

    if (!title || !description || !dueDate || !creatorUserId) {
      errorCode = 422
      throw new Error('Por favor verifique se todas as informações necessárias foram preenchidas corretamente e tente novamente.')
    }

    dueDate = dueDate.split('/').reverse().join('/')

    const id = 't'+Date.now().toString()

    const task: Task = {
      id,
      title, 
      description,
      due_date: dueDate,
      creator_user_id: creatorUserId
    }

    await connection('P_todo_list_Tasks')
      .insert(task)
    
    res.status(201).send('Tarefa criada com sucesso!')
  } catch (error: any) {
    res.status(errorCode).send({message: error.sqlMessage || error.message})
  }
})

app.get('/tasks/:id', async (req: Request, res: Response): Promise<any> => {
  let errorCode = 400
  try {
    const id = req.params.id

    const result = await connection
      .select('P_todo_list_Tasks.id as task_id', 'title', 'description', `CONCAT(DAY(due_date), '/', MONTH(due_date), '/', YEAR(due_date)) as due_date`, 'status', 'creator_user_id', 'nickname as creator_user_nickname')
      .from('P_todo_list_Tasks')
      .leftJoin('P_todo_list_Users', 'P_todo_list_Tasks.creator_user_id', 'P_todo_list_Users.id')

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({message: error.sqlMessage || error.message})
  }
})

// servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})