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

app.get('/tasks', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const creatorUserId: string = req.query.creatorUserId as string
    const status: string = req.query.status as string
    const query: string = req.query.query as string

    let result = { tasks: await connection('P_todo_list_Tasks') }

    if (creatorUserId) result = {
      tasks:
        await connection
          .select('P_todo_list_Tasks.id as taskId',
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

    if (status) result = {
      tasks:
        await connection
          .select('P_todo_list_Tasks.id as taskId',
            'title',
            'description',
            'due_date',
            'status',
            'creator_user_id',
            'nickname')
          .from('P_todo_list_Tasks')
          .leftJoin('P_todo_list_Users', 'P_todo_list_Tasks.creator_user_id', 'P_todo_list_Users.id')
          .where('status', status)
    }

    if (result.tasks.length > 0) {
      for (let i of result.tasks) {
        i.due_date = dateToStringDate(i.due_date)
      }
    }

    if (query) result = {
      tasks:
        await connection.raw(`
          SELECT P_todo_list_Tasks.id as taskId,
          title,
          description,
          due_date,
          status,
          creator_user_id,
          nickname
          FROM P_todo_list_Tasks
          LEFT JOIN P_todo_list_Users ON P_todo_list_Tasks.creator_user_id = P_todo_list_Users.id
          WHERE title like '%${query}%' OR description like '%${query}%'
        `)
    }

    if (result.tasks[0].length > 0) {
      for (let i of result.tasks[0]) {
        i.due_date = dateToStringDate(i.due_date)
      }
    }

    if (query) result.tasks = result.tasks[0]

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/tasks/delayed', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {

    let result = {
      tasks: await connection
        .select('P_todo_list_Tasks.id as taskId', 'title', 'description', 'due_date as dueDate', 'creator_user_id as creatorUserId', 'nickname as creatorUserNickname')
        .from('P_todo_list_Tasks')
        .join('P_todo_list_Users', 'P_todo_list_Tasks.creator_user_id', 'P_todo_list_Users.id')
        .whereRaw(`due_date < CURDATE() AND status <> 'done'`)
    }

    for (let i of result.tasks) {
      i.dueDate = dateToStringDate(i.dueDate)
    }

    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.get('/tasks/:id', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = req.params.id

    let result =
      await connection
        .select('P_todo_list_Tasks.id as task_id', 'title', 'description', `due_date`, 'status', 'creator_user_id', 'nickname as creator_user_nickname')
        .from('P_todo_list_Tasks')
        .leftJoin('P_todo_list_Users', 'P_todo_list_Tasks.creator_user_id', 'P_todo_list_Users.id')
        .where('P_todo_list_Tasks.id', id)

    if (!result || result === undefined || result.length === 0) {
      errorCode = 422
      throw new Error('Não encontramos a tarefa com o id informado. Verifique o id e tente novamente.')
    }

    result[0].due_date = dateToStringDate(result[0].due_date)

    let assignedUsers =
      await connection
        .distinct('id', 'nickname')
        .from('P_todo_list_Assigned_Users')
        .join('P_todo_list_Users', 'P_todo_list_Assigned_Users.user_id', 'P_todo_list_Users.id')
        .where('P_todo_list_Assigned_Users.task_id', id)

    res.status(200).send({ result, assignedUsers })
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

app.post('/tasks/assign', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { task_id, user_ids } = req.body

    if (!task_id || !user_ids) {
      errorCode = 422
      throw new Error('Verifique se as informações necessárias foram preenchidas corretamente e tente novamente.')
    }

    const check = await connection.raw(`
      SELECT distinct user_id, count(*) as times_assigned_to_same_task FROM P_todo_list_Assigned_Users
      WHERE task_id = '${task_id}' AND user_id IN (${user_ids})
      GROUP BY user_id
    `)

    // console.log(check[0])

    // for (let i of check) {
    //   console.log(user_ids.indexOf(i.user_ids))
    //   console.log(i.user_id)
    //   if (user_ids.indexOf(i.user_ids) > -1) {
    //     console.log(user_ids.indexOf(i.user_ids))
    //     i.user_ids.splice(user_ids.indexOf(i.user_ids), 1)
    //   } 
    // }

    for (let i of user_ids) {
      let user_id = i
      await connection('P_todo_list_Assigned_Users').insert({ task_id, user_id })
    }

    res.status(201).send('Usuário atribuido com sucesso!')
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.post('/tasks/status/edit', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const task_ids: string[] = req.query.task_ids as string[]
    const new_status = req.query.new_status

    if (!task_ids || !new_status) {
      errorCode = 422
      throw new Error('Verifique se as informações de id da tarefa e novo status foram preenchidas corretamente e tente novamente.')
    }

    await connection('P_todo_list_Tasks').whereIn('id', task_ids).update({ status: new_status })

    res.status(200).send('Status da(s) tarefa(s) alterado com sucesso!')
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

app.delete('/tasks/:id', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 422
      throw new Error('É necessário informar o id da tarefa para deletar uma tarefa')
    }

    const check = await connection('P_todo_list_Tasks').where('id', id)
    console.log(check, check.length)
    if (check.length === 0) {
      errorCode = 404
      throw new Error('Tarefa não encontrada. Verifique o id informado e tente novamente.')
    }

    await connection('P_todo_list_Assigned_Users').where('task_id', id).del()
    await connection('P_todo_list_Tasks').where('id', id).del()

    res.status(200).send('Tarefa removida com sucesso')
  } catch (error: any) {
    res.status(errorCode).send({message: error.sqlMessage || error.message})
  }
})

app.delete('/tasks/:taskId/assigned/:assignedUserId', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const taskId = req.params.taskId
    const assignedUserId = req.params.assignedUserId

    if (!taskId || !assignedUserId) {
      errorCode = 422
      throw new Error('Verifique se as informações de id da tarefa e do usuário desginado foram preenchidas corretamente e tente novamente.')
    }

    const checkTask =
      await connection
        .distinct('task_id')
        .from('P_todo_list_Assigned_Users')
        .where(`task_id`, taskId)

    if (checkTask.length === 0) {
      errorCode = 404
      throw new Error('Tarefa não encontrada. Verifique o id da tarefa e tente novamente.')
    }

    const checkUser =
      await connection
        .distinct('user_id')
        .from('P_todo_list_Assigned_Users')
        .where(`user_id`, assignedUserId)

    if (checkUser.length === 0) {
      errorCode = 404
      throw new Error('Usuário não designado a esta tarefa. Verifique o id do usuário e tente novamente.')
    }

    await connection('P_todo_list_Assigned_Users')
      .whereRaw(`task_id = ? AND user_id = ?`, [taskId, assignedUserId])
      .del()

    res.status(200).send('Usuário removido da tarefa com sucesso.')
  } catch (error: any) {
    res.status(errorCode).send({ message: error.sqlMessage || error.message })
  }
})

app.delete('/users/:id', async (req:Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const id = req.params.id

    if (!id) {
      errorCode = 422
      throw new Error('É necessário informar um id válido para deletar um usuário. Verifique o id e tente novamente.')
    }

    const check = await connection('P_todo_list_Users').where('id', id)

    if (check.length === 0) {
      errorCode = 404
      throw new Error('Usuário não encontrado. Verifique o id informado e tente novamente.')
    }

    await connection('P_todo_list_Assigned_Users').where('user_id', id).del()
    await connection('P_todo_list_Users').where('id', id).del()

    res.status(200).send('Usuário deletado com sucesso!')
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