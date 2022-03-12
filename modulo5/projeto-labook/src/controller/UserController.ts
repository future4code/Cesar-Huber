import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { LoginInputDTO, SignupInputDTO } from "../models/DTOs";

export default class UserController {

  constructor(
    private userBusiness: UserBusiness
  ) { }

  signup = async (req: Request, res: Response): Promise<void> => {
    const {name, email, password} = req.body

    const input: SignupInputDTO = {
      name, 
      email, 
      password
    }

    try {
      const token = await this.userBusiness.signup(input)

      res.status(201).send({message: 'User registered successfully', token})
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'All fields are required':
            res.status(422).send(error.message)
          case 'Email already registered':
            res.status(422).send(error.message)
          default:
            res.status(400).send('Some error occurred while signing up')
        }
      }
    }
  }

  login = async (req: Request, res: Response): Promise<void> => {
    const {email, password} = req.body

    const input: LoginInputDTO = {
      email,
      password
    }

    try {
      const token = await this.userBusiness.login(input)

      res.status(200).send(token)
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Email and Password are both required in order to log in':
            res.status(422).send(error.message)
          case 'Email not registered':
            res.status(401).send(error.message)
          case 'Incorrect password':
            res.status(403).send(error.message)
          default:
            res.status(400).send('Some error occurred while logging in')
        }
      }
    }
  }
}