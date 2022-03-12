import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { NewPostInputDTO } from "../models/DTOs";

export default class PostController {

  constructor(
    private postBusiness: PostBusiness
  ){}

  newPost = async (req: Request, res: Response) => {
    const {picture, description, type} = req.body
    const token = req.headers.authorization as string

    const input: NewPostInputDTO = {
      picture,
      description,
      type
    }

    try {
      await this.postBusiness.newPost(input, token)

      res.status(201).send({message: 'Posted successfully'})
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Token is needed in order to verify authorization':
            res.status(401).send(error.message)
          case 'All fields are required':
            res.status(422).send(error.message)
          case `Type must be either 'Normal' or 'Event'`:
            res.status(422).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while posting ${type}`)
        }
      }
    }
  }

  findPostById = async (req: Request, res: Response) => {
    const postId = req.params.id
    const token = req.headers.authorization as string

    try {
      const post = await this.postBusiness.findPostById(postId, token)

      res.status(200).send(post)
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Token is needed in order to verify authorization':
            res.status(401).send(error.message)
          case 'All fields are required':
            res.status(422).send(error.message)
          case `Type must be either 'Normal' or 'Event'`:
            res.status(422).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while getting post`)
        }
      }
    }

  }

}