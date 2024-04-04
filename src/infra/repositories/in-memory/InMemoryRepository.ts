import { v4 as uuidV4 } from "uuid";
import { User } from "../../../domain/entities/User";
import { IUserRespository } from "../../../domain/interfaces/IUserRepository";
export class UserRespository implements IUserRespository {
    
    public items: User[] = [];
    async create(name: string, username: string, password: string): Promise<User> {
        const user: User = {
            id: uuidV4(),
            name: name,
            username: username,
            password: password,
            created_at: new Date(),
            updated_at: new Date()
        }
        this.items.push(user);
        return user 
    }
    async find(): Promise<User[]> {
        return this.items
    }
    async findOne(id: string): Promise<User> {
        const user: any = this.items.find(item => item.id === id);
        return user
    }
    async findFirst(username: string): Promise<User> {
        const user: any = this.items.find(item => item.username === username);
        return user
    }
    async update(id: string,name: string, username: string, password: string): Promise<User> {
        const userAlreadyExists = this.items.findIndex(item => item.id === id)

        if(userAlreadyExists !== -1){
            this.items[userAlreadyExists].name = name;
            this.items[userAlreadyExists].username = username;
            this.items[userAlreadyExists].password = password;
            return this.items[userAlreadyExists]
        }

        throw new Error("User not found")
    }
    async delete(id: string): Promise<User> {
        const userAlreadyExists = this.items.find(item => item.id === id)
        console.log(id);
        this.items = this.items.filter(item => item.id !== id)
        console.log(this.items)
        
        return userAlreadyExists as unknown as User
    }
    
}