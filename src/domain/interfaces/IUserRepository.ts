import { User } from "../entities/User";

export interface IUserRespository{
    create(name: string, username: string, password: string): Promise<User>;
    find(): Promise<User[]>;
    findOne(id: string): Promise<User>
    findFirst(username: string): Promise<User>
    update(id: string, name: string, username: string, password: string): Promise<User>
    delete(id: string): Promise<User>;
}
