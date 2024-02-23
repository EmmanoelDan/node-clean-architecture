import { Request, Response } from "express";
import { FindUserUseCase } from "../usecases/FindUserUseCase";

export class FindUserController {
    constructor(public _findUseCase: FindUserUseCase) {}

    async handler(req: Request, res: Response) {
        const result = await this._findUseCase.execute();

        return res.status(201).json({data: result})
    }
}