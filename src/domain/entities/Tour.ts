import { v4 as uuidV4 } from "uuid";

export class Tour {
    public id: string;
    public created_at: Date;
    public updated_at: Date;

    constructor(
        public user_id: string,
        public name: string,
        public start: Date,
        public end: Date,
        public city: string,
        public state: string,
        public balance: number,
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