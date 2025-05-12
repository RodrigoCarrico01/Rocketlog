import e, { Request, Response, NextFunction } from 'express'
import {z} from 'zod'

class UsersController {

  create(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { name, email, password} = bodySchema.parse(request.body)
    
    return response.json({name, email, password})
  }
}

export {UsersController}