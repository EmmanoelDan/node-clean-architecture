import { User } from "../entities/User";
import { UserRespository } from "../repositories/in-memory/InMemoryRepository";

export class FindOneUserUseCase {
    constructor(public _userRepo: UserRespository) {}

    async execute(id: string): Promise<User> {
        const user = await this._userRepo.findOne(id);
        return user
    }
}