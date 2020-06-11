import { Request, Response } from 'express'

import File from '../schemas/File'

class FileController {
  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { originalname, filename } = req.file

      const file = await File.create({
        name: originalname,
        path: filename
      })

      return res.status(200).json(file)
    } catch (error) {
      return res.status(400).json({ error: 'error creating file' })
    }
  }
}

export default new FileController()
