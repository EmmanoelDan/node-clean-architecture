import { v4 as uuidV4 } from "uuid";

export class Cost {
    public id: string;
    public activities_id: string;
    public created_at: Date;
    public updated_at: Date;

    constructor(
        public type: string,
        public price: number,
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