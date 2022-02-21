import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types'

export const generateToken = (id: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: '1min'
    }
  )
  return token
}