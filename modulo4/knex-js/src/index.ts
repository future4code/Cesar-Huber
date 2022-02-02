import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import connection from './connection'

const app = express()

app.use(express.json())
app.use(cors())

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE '%${name}%'
  `)

  return result[0][0]
}

const getCountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as qtd FROM Actor WHERE gender = '${gender}'
  `)

  return result[0][0]
}

app.get('/actors', async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const name: string = req.query.name as string

    console.log(await getActorByName(name))

    res.end()

  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
  await connection('Actor')
    .delete()
    .where('id', id)
}

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put('/actor', async (req: Request, res: Response) => {
  try {
    await updateActor(
      req.body.id,
      req.body.salary
    )

    res.status(201).send('Salário atualizado com sucesso')
  } catch (error: any) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    })
  }
})

app.delete('/actor/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    await deleteActor(
      req.params.id
    )

  } catch (error: any) {
    res.status(errorCode).send({message: error.sqlMessage || error.message})
  }
})

// servidor

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})