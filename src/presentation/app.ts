import express from "express";
import { FindUserController } from "./controllers/FindUsersControllers";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindOneUserController } from "./controllers/FindOneUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { authenticateUser } from "../shared/middlewares/AuthUser";

export class Api {
    public static async run(
        port: number,
        _createUserController: CreateUserController,
        _findUserController: FindUserController,
        _findOneUserController: FindOneUserController,
        _updateUserController: UpdateUserController,
        _deleteUserController: DeleteUserController,
        _authUserController: AuthUserController
    ): Promise<void> {  
        const app = express();

        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        app.post('/user', (req, res) => _createUserController.handler(req, res))
        app.get('/user', (req, res) => _findUserController.handler(req, res))
        app.get('/user/:id', authenticateUser, (req, res) => _findOneUserController.handler(req, res))
        app.put('/user/:id', authenticateUser, (req, res) => _updateUserController.handler(req, res))
        app.delete('/user/:id', authenticateUser, (req, res) => _deleteUserController.handler(req, res))
        app.post('/sign', (req, res) => _authUserController.handler(req, res))

        app.listen(port, () => {
            console.log('listening on port ' + port);
        })
    }
}
