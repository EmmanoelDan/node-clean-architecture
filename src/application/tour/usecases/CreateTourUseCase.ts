import { Tour } from "../../../domain/entities/Tour";
import { ITourRespository } from "../../../domain/interfaces/ITourRepository";


export class CreateTourUseCase {
    constructor(private _userRepo: ITourRespository){}

    async execute(user_id: string, name: string, start: Date, end: Date, balance: number): Promise<Tour> {
        
        return this._userRepo.create(user_id, name, start,end, balance)
    }
}