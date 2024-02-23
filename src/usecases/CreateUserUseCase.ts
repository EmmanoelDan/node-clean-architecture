import { User } from "../entities/User";
import { IUserRespository } from "../repositories/interfaces/IUserRepository";

export class CreateUserUseCase {
    constructor(public _userRepo: IUserRespository){}

    async execute(name: string, username: string, password: string): Promise<User> {
        const user = await this._userRepo.create(name, username, password);

        return user
    }
}