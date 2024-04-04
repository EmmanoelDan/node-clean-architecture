import { User } from "../../domain/entities/User";
import { IUserRespository } from "../../domain/interfaces/IUserRepository";
import { encryptPass } from "../../shared/utils/bcrypt";
import { RegexPass } from "../../shared/utils/zod";

export class CreateUserUseCase {
    constructor(private _userRepo: IUserRespository){}

    async execute(name: string, username: string, password: string): Promise<User> {
        const passwordRegex = await RegexPass(password);

        if(!passwordRegex) {
            throw new Error("Passwords Invalid!");
        }

        const passwordHash = await encryptPass(password)

        if(!passwordHash) {
            throw new Error("Invalid Hash pass!");
        }

        const user = await this._userRepo.create(name, username, passwordHash);
        return user
    }
}