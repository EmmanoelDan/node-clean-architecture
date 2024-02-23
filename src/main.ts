import { Api } from "./app";
import * as dotenv from "dotenv";
import { UserRespository } from "./repositories/in-memory/InMemoryRepository";
import { FindUserUseCase } from "./usecases/FindUserUseCase";
import { FindUserController } from "./controllers/FindUsersControllers";
import { CreateUserUseCase } from "./usecases/CreateUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindOneUserUseCase } from "./usecases/FindOneUserUseCase";
import { FindOneUserController } from "./controllers/FindOneUserController";
import { UpdateUserUseCase } from "./usecases/UpdateUserUseCase";
import { UpdateUserController } from "./controllers/UpdateUserController";
dotenv.config();

export async function main(): Promise<void> {
    // Instance User Respository
    const userRepo = new UserRespository();
    // Find users instance using
    const findUserUseCase = new FindUserUseCase(userRepo);
    const _findUserController = new FindUserController(findUserUseCase);
    // Created user instance  
    const createUserUseCase = new CreateUserUseCase(userRepo)
    const _createUserController = new CreateUserController(createUserUseCase)
    // Find user by id
    const findOneUserUseCase = new FindOneUserUseCase(userRepo);
    const _findOneUserController = new FindOneUserController(findOneUserUseCase);
    // Updated user instance
    const updateUserUseCase = new UpdateUserUseCase(userRepo);
    const _updateUserController = new UpdateUserController(updateUserUseCase);
    // app instance
    await Api.run(5000, _createUserController, _findUserController, _findOneUserController, _updateUserController)
}

main();