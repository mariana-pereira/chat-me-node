import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find()

      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json({ error: 'error loading users' })
    }
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json({ error: 'error creating user' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body

      await User.findByIdAndUpdate(req.params.id, {
        name,
        email,
        password
      })

      return res.send()
    } catch (error) {
      return res.status(400).json({ error: 'error updating user' })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      await User.findByIdAndRemove(req.params.id)

      return res.send()
    } catch (error) {
      return res.status(400).json({ error: 'error deleting user' })
    }
  }
}

export default new UserController()
