import { Request, Response } from "express";
import { AuthUserUsecase } from "../../application/usecases/AuthUserUsecase";

export class AuthUserController {
    constructor(private _authUsecase: AuthUserUsecase) { }

    async handler(req: Request, res: Response){
        const {username, password} = req.body;
        const user = await this._authUsecase.execute({username, password});

        return res.status(200).json(user);
    }

}