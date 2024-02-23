import { User } from "../entities/User";
import { UserRespository } from "../repositories/in-memory/InMemoryRepository";


export class FindUserUseCase {
    constructor(public _userRepo: UserRespository){}

    async execute(): Promise<User[]> {
       const users = await this._userRepo.find();
       
       return users
    }
}