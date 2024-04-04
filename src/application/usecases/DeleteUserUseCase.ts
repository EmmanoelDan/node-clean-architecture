import { User } from "../../domain/entities/User";
import { IUserRespository } from "../../domain/interfaces/IUserRepository";

export class DeleteUserUseCase {
    constructor(private _userRepository: IUserRespository) {}

    async execute(id: string): Promise<User> {
        const user = await this._userRepository.delete(id);

        return user;
    }
}