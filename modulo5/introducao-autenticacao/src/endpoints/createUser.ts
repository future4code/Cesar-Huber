import { Request, Response } from "express";
import { insertUser } from "../database/insertUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const {email, password} = req.body

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      errorCode = 422
      throw new Error("Invalid email")
    }

    if (!req.body.password || req.body.password.length < 6) {
      errorCode = 422
      throw new Error("Invalid password")
    }

    const id = generateId()

    await insertUser(id, email, password)

    const token = generateToken({
      id,
    })

    res.status(201).send({token})
    
  } catch (error: any) {
    res.status(errorCode).send({message: error.message || error.sqlMessage})
  }
}