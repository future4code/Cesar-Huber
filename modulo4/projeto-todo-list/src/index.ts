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

const dateToStringDate = (date: Date): string => {

  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()

  return dd + '/' + mm + '/' + yyyy;
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

app.get('/users/:id', async (req: Request, res: Response): Promise<void> => {
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

    if (!name) { name = undefined }
    if (!nickname) { nickname = undefined }
    if (!email) { email = undefined }

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
    let { title, description, dueDate, creatorUserId } = req.body

    if (!title || !description || !dueDate || !creatorUserId) {
      errorCode = 422
      throw new Error('Por favor verifique se todas as informações necessárias foram preenchidas corretamente e tente novamente.')
    }

    dueDate = dueDate.split('/').reverse().join('/')

    const id = 't' + Date.now().toString()

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
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/tasks/:id', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = req.params.id

    const result = await connection
      .select('P_todo_list_Tasks.id as task_id', 'title', 'description', `due_date`, 'status', 'creator_user_id', 'nickname as creator_user_nickname')
      .from('P_todo_list_Tasks')
      .leftJoin('P_todo_list_Users', 'P_todo_list_Tasks.creator_user_id', 'P_todo_list_Users.id')
      .where('P_todo_list_Tasks.id', id)

    if (!result || result === undefined || result.length === 0) {
      errorCode = 422
      throw new Error('Não encontramos a tarefa com o id informado. Verifique o id e tente novamente.')
    }

    result[0].due_date = dateToStringDate(result[0].due_date)

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/users', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    const searchForName: string = req.query.name as string

    let rawResult = await connection.raw(`SELECT * FROM P_todo_list_Users`)

    // não consegui fazer com query builder essa parte
    if (searchForName) rawResult = await connection.raw(`
      SELECT id, nickname FROM P_todo_list_Users
      WHERE name like '%${searchForName}%'
    `)

    const result = rawResult[0]

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/tasks', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const creatorUserId: string = req.query.creatorUserId as string

    if (!creatorUserId) {
      errorCode = 422
      throw new Error('Favor verificar se o id do usuário criador da tarefa foi preenchido corretamente e tentar novamente.')
    }

    let result = {
      tasks:
        await connection
          .select('P_todo_list_Tasks.id',
            'title',
            'description',
            'due_date',
            'status',
            'creator_user_id',
            'nickname')
          .from('P_todo_list_Tasks')
          .leftJoin('P_todo_list_Users', 'P_todo_list_Tasks.creator_user_id', 'P_todo_list_Users.id')
          .where('P_todo_list_Tasks.creator_user_id', creatorUserId)
    }

    if (result.tasks.length > 0) {
      for (let i of result.tasks) {
        i.due_date = dateToStringDate(i.due_date)
      }
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.post('/tasks/assign', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { task_id, user_id } = req.body

    if (!task_id || !user_id) {
      errorCode = 422
      throw new Error('Verifique se as informações necessárias foram preenchidas corretamente e tente novamente.')
    }

    const assignedUsers: { task_id: string, user_id: string } = {
      task_id,
      user_id
    }

    await connection('P_todo_list_Assigned_Users').insert(assignedUsers)

    res.status(201).send('Usuário atribuido com sucesso!')
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/tasks/:id/assigned', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 422
      throw new Error('É necessário informar o id de uma tarefa.')
    }

    const rawResult = await connection.raw(`
      SELECT AU.user_id as id, U.nickname FROM P_todo_list_Assigned_Users as AU
      INNER JOIN P_todo_list_Users as U ON AU.user_id = U.id
      WHERE AU.task_id = '${id}'
    `)

    const result = {
      users: rawResult[0]
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
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