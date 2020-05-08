import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

export default function generateToken (params = {}): string {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })
}
