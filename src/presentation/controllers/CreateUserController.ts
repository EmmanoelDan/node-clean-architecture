import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/usecases/CreateUserUseCase";

export class CreateUserController {
    constructor(public _createUseCase: CreateUserUseCase) {}

    async handler(req: Request, res: Response) {
        const {name, username, password} = req.body
        const result = await this._createUseCase.execute(name, username, password);

        return res.status(201).json({data: result})
    }
}