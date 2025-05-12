import { Request, Response } from "express"


class SessionsController {
  create( request: Request, response: Response) {
    return response.status(200).json({message: "ok"})
  }
}

export { SessionsController }