import { Request, Response } from "express";
import { FindOneUserUseCase } from "../usecases/FindOneUserUseCase";


export class FindOneUserController {
    constructor(public _findOneUserUseCase: FindOneUserUseCase) { }

    async handler(req: Request, res: Response){
        const id = req.params.id;
        const result = await this._findOneUserUseCase.execute(id);

        res.status(200).json(result);
    }
}