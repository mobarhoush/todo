import { Response, Request, NextFunction } from 'express'

const validationMiddleware = (
  schema: any,
  property: 'body' | 'params' | 'query'
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req[property]
    const { error } = schema.validate(body)
    const valid = error == null
    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map((i: any) => i.message).join(',')
      console.log('error', message)
      res.status(422).json({ error: message })
    }
  }
}

export default validationMiddleware
