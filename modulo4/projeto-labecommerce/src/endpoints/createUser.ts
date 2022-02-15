import { connection } from "../data/connection"
import {Request, Response} from 'express'
import { User } from '../types'

export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const {name, email, password} = req.body
    const id = Date.now().toString()

    if (!name || !email || !password) {
      errorCode = 422
      throw new Error('É ncessário preencher todos os campos obrigatórios (name, email e password). Verifique e tente novamente.')
    }

    const checkEmail = await connection('P_labecommerce_Users').where('email', email)

    if (checkEmail.length > 0) {
      errorCode = 409
      throw new Error('Este email já está registrado.')
    }

    const newUser: User = {
      id,
      name,
      email,
      password
    }

    await connection('P_labecommerce_Users').insert(newUser)

    res.status(201).send('Usuário criado com sucesso!')
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({message: error.message})
    } else {
      res.status(errorCode).send('Ocorreu um erro inesperado')
    }
    
  }
}