import { Tour } from "../entities/Tour";

export interface ITourRespository{
    create(user_id: string, name: string, start: Date, end: Date, balance: number): Promise<Tour>;
    // find(): Promise<User[]>;
    // findOne(id: string): Promise<User>
    // findFirst(username: string): Promise<User>
    // update(id: string, name: string, username: string, password: string): Promise<User>
    // delete(id: string): Promise<User>;
}
