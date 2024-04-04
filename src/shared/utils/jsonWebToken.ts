import { sign } from "jsonwebtoken"
// import "../config/jwt";
import jwtConfig from "../../infra/config/jwt"

export async function jwtSign(id: string, username: string) {
    if(!jwtConfig.secretKey) {
        throw new Error("Secret key not provided")
    }
    const token = sign(
        {
            id: id, 
            username: username
        }, 
        jwtConfig.secretKey, 
            {
                expiresIn: jwtConfig.expirenTime
            }
        )
        
    return token;
}