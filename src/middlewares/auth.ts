import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

export default (req, res, next): void => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided.' })
  }

  const parts = authHeader.split(' ')

  if (!(parts.length === 2)) {
    return res.status(401).json({ error: 'Token error.' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Malformatted token.' })
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token.' })
    }

    req.userId = decoded.id

    return next()
  })
}
