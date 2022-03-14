import * as jwt from "jsonwebtoken"
import { authenticationData } from "../models/User"


export class Authenticator {

  generateToken = (
    payload: authenticationData
  ): string => {
    return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        expiresIn: "30min"
      }
    )
  }

  getTokenData = (
    token: string
  ): any => {
    return jwt.verify(
      token,
      process.env.JWT_KEY as string,
      (err, result) => {
        if (err) return err.message
        return result
      }
    )
  }
}