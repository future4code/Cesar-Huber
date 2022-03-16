import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { NewPostInputDTO } from "../models/DTOs";
import { TYPE } from "../models/Post";

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
          case 'Post ID must be informed to get post':
            res.status(422).send(error.message)
          case 'User not authorized. Try logging in again.':
            res.status(403).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while finding post`)
        }
      }
    }
  }

  feed = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string
    const page = Number(req.params.page)

    try {
      const feed = await this.postBusiness.feed(token, page)

      res.status(200).send(feed)
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Token is needed in order to verify authorization':
            res.status(401).send(error.message)
          case 'User not authorized. Try logging in again.':
            res.status(403).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while finding post`)
        }
      }
    }
  }

  feedByType = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string
    const page = Number(req.params.page)
    const type = req.params.type as TYPE

    try {
      const feed = await this.postBusiness.feedByType(token, page, type)

      res.status(200).send(feed)
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Token is needed in order to verify authorization':
            res.status(401).send(error.message)
          case 'User not authorized. Try logging in again.':
            res.status(403).send(error.message)
          case `Type must either be 'Normal' or 'Event'`:
            res.status(422).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while finding post`)
        }
      }
    }
  }

  handleLike = async (req: Request, res: Response) => {
    const postId = req.params.id
    const token = req.headers.authorization as string

    try {
      const message = await this.postBusiness.handleLike(postId, token)

      res.status(200).send(message)
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Token is needed in order to verify authorization':
            res.status(401).send(error.message)
          case 'Post ID must be informed to get post':
            res.status(422).send(error.message)
          case 'User not authorized. Try logging in again.':
            res.status(403).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while liking post`)
        }
      }
    }
  }

  comment = async (req: Request, res: Response) => {
    const postId = req.params.id
    const token = req.headers.authorization as string
    const comment = req.body.comment

    try {
      await this.postBusiness.comment(postId, token, comment)

      res.status(200).send('Commented on post successfully')
    } catch (error: any) {
      if (error.message) {
        switch(error.message) {
          case 'Token is needed in order to verify authorization':
            res.status(401).send(error.message)
          case 'Post ID must be informed to get post':
            res.status(422).send(error.message)
          case 'User not authorized. Try logging in again.':
            res.status(403).send(error.message)
          case 'Comment must have a non empty string':
            res.status(422).send(error.message)
          default: 
            res.status(400).send(`Some error occurred while commenting on post`)
        }
      }
    }
  }

}