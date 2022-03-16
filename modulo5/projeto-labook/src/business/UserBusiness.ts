// camada de negócios
// contém as regras e lógicas de validação
// em Clean Architecture não depende da camada de dados (UserData)
// para isso, cria interfaces que são usadas pela camada de dados, criando assim uma inversão de dependências
// para fins de fixação de aprendizado, não usarei clean architecture e sim arquitetura em camadas

import UserData from "../data/UserData";
import { BefriendInputDTO, LoginInputDTO, SignupInputDTO } from "../models/DTOs";
import { Message } from "../models/Post";
import User from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness {
  constructor(
    private userData:UserData,
    private idGenerator:IdGenerator,
    private hashManager:HashManager,
    private authenticator:Authenticator
  ){}

  signup = async (input: SignupInputDTO) => {

    const {name, email, password} = input

    if (!name || !email || !password) {
      throw new Error('All fields are required')
    }

    const isUserRegistered = await this.userData.findByEmail(email)

    if (isUserRegistered) {
      throw new Error('Email already registered')
    }

    const id = this.idGenerator.generateId()

    const hashPassword = await this.hashManager.hash(password)

    const user = new User(
      id,
      name,
      email,
      hashPassword
    )

    await this.userData.insert(user)

    const token = this.authenticator.generateToken({id})

    return token
  }

  login = async (input: LoginInputDTO) => {

    const {email, password} = input

    if (!email || !password) {
      throw new Error('Email and Password are both required in order to log in')
    }

    const isUserRegistered = await this.userData.findByEmail(email)

    if (!isUserRegistered) {
      throw new Error('Email not registered')
    }

    const isPasswordCorrect = await this.hashManager.compare(password, isUserRegistered.password)

    if (!isPasswordCorrect) {
      throw new Error('Incorrect password')
    }

    const token = this.authenticator.generateToken({id: isUserRegistered.id})

    return token
  }

  handleFriendStatus = async (token: string, friendId: string): Promise<Message> => {
    if (!token) {
      throw new Error('Token is needed in order to verify authorization')
    }
  
    const data = this.authenticator.getTokenData(token)

    if (data === 'jwt expired') {
      throw new Error('Token expired. Please log in again.')
    }
    if (!data) {
      throw new Error('Could not verify token data. Try logging in again.')
    }
    const userId = data.id

    const userAuthorized = await this.userData.findById(userId)

    if (!userAuthorized) {
      throw new Error('User not authorized. Try logging in again.')
    }

    if (!friendId) {
      throw new Error('Friend ID must be informed to handle friend status')
    }

    const friendshipExists = await this.userData.friendshipExists(userId, friendId)

    let message = 'Befriended'

    if (!friendshipExists) {
      const id1 = this.idGenerator.generateId()
      const id2 = this.idGenerator.generateId()
      const befriend: BefriendInputDTO = {
        id: id1,
        user_id: userId,
        friend_id: friendId
      }
      const mutualBefriend: BefriendInputDTO = {
        id: id2,
        user_id: friendId,
        friend_id: userId
      }
      this.userData.insertFriend(befriend, mutualBefriend)
    } else {
      this.userData.deleteFriend(userId, friendId)
      message = 'Unfriended'
    }

    return {message}
  }

}
