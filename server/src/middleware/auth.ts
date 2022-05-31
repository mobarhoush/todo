import { Response, Request, NextFunction } from 'express'

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerToken = req.headers.authorization
  if (!headerToken) {
    return res.status(401).send('No token provided')
  }
  if (headerToken !== 'b8e24c095f0625375a6f5cd247843db8') {
    return res.status(401).send(`UnAuthorized`)
  }
  next()
}

export default authMiddleware
