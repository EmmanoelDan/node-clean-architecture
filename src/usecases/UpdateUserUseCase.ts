import { User } from "../entities/User";
import { IUserRespository } from "../repositories/interfaces/IUserRepository";


export class UpdateUserUseCase {
    constructor(public _userRespo: IUserRespository) {
    }

    async execute(id: string, name: string, username: string, password: string): Promise<User> {
        const user = await this._userRespo.update(id, name, username, password)

        return user
    }
}