import { connection } from "../data/connection"
import {Request, Response} from 'express'
import { getAddress } from "../services/getAddress"
import { User } from '../types'
import { mailTransporter } from '../services/mailTransporter'

export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const cep: string = req.query.cep as string
    const email: string = req.query.email as string
    const password: string = req.query.password as string
    const id = Date.now().toString()
    const addressId = Math.floor(Date.now())/1000
    const {numero, complemento} = req.body

    const newUser: User = {
      id,
      email,
      senha: password
    }
    const userAddress = await getAddress(cep)
    const fullAddress = {
      id: addressId,
      CEP: cep,
      ...userAddress,
      Numero: numero,
      Complemento: complemento,
      user_id: id
    }

    if (!userAddress) {
      throw new Error('Deu ruim no getAddress')
    }

    await connection('aula50_users').insert(newUser)
    await connection('aula50_addresses').insert(fullAddress)

    const info = await mailTransporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: "Cadastro na plataforma API",
      text: `Olá, ${email}! 
      Eu utilizei o objeto newUser? Não entendi exatamente o que era para descrever, mas só sei que a funcionalidade de enviar o email, tá funcionando! rs`,
      html: `<p>Olá, ${email}! <br><p align = center><strong>HTML não é o meu forte!</strong></p>
      <div align = center>Eu utilizei o objeto newUser? <br>Não entendi <em>exatamente</em> o que era para descrever, mas só sei que a funcionalidade de enviar o email, <strong><em>tá funcionando!!!!</em></strong> rs</div></p>`
  })

    res.status(201).send({info, message: 'Usuário criado com sucesso'})

  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message })
    } else {
      res.status(errorCode).send('Ocorreu um erro inesperado.')
    }
  }
}