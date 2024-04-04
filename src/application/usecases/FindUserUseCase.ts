import { User } from "../../domain/entities/User";
import { IUserRespository } from "../../domain/interfaces/IUserRepository";

export class FindUserUseCase {
    constructor(private _userRepo: IUserRespository){}

    async execute(): Promise<User[]> {
       const users = await this._userRepo.find();
       
       return users
    }
}