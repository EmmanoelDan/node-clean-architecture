import { Request, Response } from "express";
import { UpdateUserUseCase } from "../usecases/UpdateUserUseCase";


export class UpdateUserController {
    constructor(public _updateUserUsecase: UpdateUserUseCase) { }
    async handler(req: Request, res: Response){
        const { name, username, password } = req.body;
        const id = req.params.id;

        const result = await this._updateUserUsecase.execute(id, name, username, password);

        res.status(200).json(result);
    }
}