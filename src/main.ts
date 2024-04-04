import { Api } from "./presentation/app";
import { UserRespository } from "./infra/repositories/in-memory/InMemoryRepository";
import { FindUserUseCase } from "./application/usecases/FindUserUseCase";
import { FindUserController } from "./presentation/controllers/FindUsersControllers";
import { CreateUserUseCase } from "./application/usecases/CreateUserUseCase";
import { CreateUserController } from "./presentation/controllers/CreateUserController";
import { FindOneUserUseCase } from "./application/usecases/FindOneUserUseCase";
import { FindOneUserController } from "./presentation/controllers/FindOneUserController";
import { UpdateUserUseCase } from "./application/usecases/UpdateUserUseCase";
import { UpdateUserController } from "./presentation/controllers/UpdateUserController";
import { DeleteUserUseCase } from "./application/usecases/DeleteUserUseCase";
import { DeleteUserController } from "./presentation/controllers/DeleteUserController";
import { AuthUserUsecase } from "./application/usecases/AuthUserUsecase";
import { AuthUserController } from "./presentation/controllers/AuthUserController";

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
    // Deleted user instance
    const deleteUserUseCase = new DeleteUserUseCase(userRepo);
    const _deleteUserController = new DeleteUserController(deleteUserUseCase);
    // Sign User instance
    const authUserUsecase = new AuthUserUsecase(userRepo)
    const _signUserController = new AuthUserController(authUserUsecase)
    // app instance
    await Api.run(5000, _createUserController, _findUserController, _findOneUserController, _updateUserController, _deleteUserController, _signUserController)
}

main();