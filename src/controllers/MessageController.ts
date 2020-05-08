import { Request, Response } from 'express'
import Message from '../schemas/Message'

class MessageController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const messages = await Message.find()

      return res.status(200).json(messages)
    } catch (error) {
      return res.status(400).json({ error: 'error loading messages' })
    }
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const message = await Message.create(req.body)

      return res.status(200).json(message)
    } catch (error) {
      return res.status(400).json({ error: 'error creating message' })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      await Message.findByIdAndRemove(req.params.id)

      return res.send()
    } catch (error) {
      return res.status(400).json({ error: 'error deleting message' })
    }
  }
}

export default new MessageController()
