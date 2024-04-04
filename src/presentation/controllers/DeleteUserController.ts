import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/usecases/DeleteUserUseCase";

export class DeleteUserController {
    constructor(public deleteUserUseCase: DeleteUserUseCase){}

    async handler(req: Request, res: Response){
        const id = req.params.id;
        const result = await this.deleteUserUseCase.execute(id);

        res.status(200).json(result); 
    }
}