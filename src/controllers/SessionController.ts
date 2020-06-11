import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import User from '../schemas/User'
import generateToken from '../services/generateToken'

class SessionController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(400).json({ error: 'User not found.' })
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ error: 'User not found.' })
    }

    user.password = undefined

    res.json({ user, token: generateToken({ id: user._id }) })
  }
}

export default new SessionController()
