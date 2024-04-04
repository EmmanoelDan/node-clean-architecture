import { User } from "../../domain/entities/User";
import { IUserRespository } from "../../domain/interfaces/IUserRepository";

export class UpdateUserUseCase {
    constructor(private _userRespo: IUserRespository) {}

    async execute(id: string, name: string, username: string, password: string): Promise<User> {
        const user = await this._userRespo.update(id, name, username, password)

        return user
    }
}