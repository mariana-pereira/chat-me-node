import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import FileController from './controllers/FileController'
import MessageController from './controllers/MessageController'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.post('/files', multer(multerConfig).single('file'), FileController.store)

routes.get('/messages', MessageController.index)
routes.post('/messages', MessageController.store)
routes.delete('/messages/:id', MessageController.delete)

export default routes
