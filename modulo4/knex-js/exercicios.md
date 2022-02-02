## Exercícios knex JS

### Exercício 01
a) a resposta no raw traz um array com dois outros arrays, um com o nosso resultado e o outro com informações adicionais. Portanto, para retornar o resultado que queremos, devemos fazer o return do result[0], marcando o primeiro índice do array de resultado.
b) const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE '%${name}%'
  `)

  return result[0][0]
} 

c) const getCountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as qtd FROM Actor WHERE gender = '${gender}'
  `)

  return result[0][0]
}

### Exercício 02
a) const updateActor = async (id: string, salary: number): Promise<void> => {
  await connection('Actor')
    .update({
      salary: salary,
    })
    .where('id', id)
}

b) const deleteActor = async (id: string): Promise<void> => {
  await connection('Actor')
    .delete()
    .where('id', id)
}

c) const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection('Actor')
    .avg('salary as average')
    .where({ gender })

  return result[0].average;
}

### Exercício 03
a) 
b) app.get('/actor', async (req: Request, res: Response) => {
  const gender = req.query.gender
  try {
    const result = await countActors(gender as string)
    res.status(200).send({
      quantity: result,
    })
  } catch (error: any) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    })
  }
})

### Exercício 04
a) app.put("/actor", async (req: Request, res: Response) => {
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

b) app.delete('/actor/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    await deleteActor(
      req.params.id
    )

  } catch (error: any) {
    res.status(errorCode).send({message: error.sqlMessage || error.message})
  }
})