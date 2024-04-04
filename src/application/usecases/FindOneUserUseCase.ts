import { User } from "../../domain/entities/User";
import { IUserRespository } from "../../domain/interfaces/IUserRepository";

export class FindOneUserUseCase {
    constructor(private _userRepo: IUserRespository) {}

    async execute(id: string): Promise<User> {
        const user = await this._userRepo.findOne(id);
        return user
    }
}