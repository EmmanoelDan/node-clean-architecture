import { IUserRespository } from "../../domain/interfaces/IUserRepository";
import { comparePass } from "../../shared/utils/bcrypt";
import { jwtSign } from "../../shared/utils/jsonWebToken";

interface AuthUserReq {
    username: string;
    password: string;
}

export class AuthUserUsecase {
    constructor(private _userRepo: IUserRespository){}

    async execute({username, password}: AuthUserReq){

        const user = await this._userRepo.findFirst(username);

        if(!user) {
            throw new Error("User not found: " + username)
        }
        const passwordMatch = await comparePass(password, user.password);

        if(!passwordMatch) {
            throw new Error("Password incorrect")
        }
        
        const token = await jwtSign(user.id, user.username);

        return { id: user.id, username: user.username, token: token}
    }

}