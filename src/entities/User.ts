import { v4 as uuidV4 } from "uuid";

export class User {
    public id: string;
    public created_at: Date;
    public updated_at: Date;

    constructor(
        public name: string,
        public username: string,
        public password: string
            
        ) {
        if(!this.id){
            this.id = uuidV4();
        }

        if(!this.created_at) {
            this.created_at = new Date();
        }

        if(!this.updated_at) {
            this.updated_at = new Date();
        }

    }
}