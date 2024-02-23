import express from "express";
import { FindUserController } from "./controllers/FindUsersControllers";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindOneUserController } from "./controllers/FindOneUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";


export class Api {
    public static async run(
        port: number,
        _createUserController: CreateUserController,
        _findUserController: FindUserController,
        _findOneUserController: FindOneUserController,
        _updateUserController: UpdateUserController
    ): Promise<void> {  
        const app = express();

        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        app.post('/user', (req, res) => _createUserController.handler(req, res))
        app.get('/user', (req, res) => _findUserController.handler(req, res))
        app.get('/user/:id', (req, res) => _findOneUserController.handler(req, res))
        app.put('/user/:id', (req, res) => _updateUserController.handler(req, res))

        app.listen(port, () => {
            console.log('listening on port ' + port);
        })
    }
}
