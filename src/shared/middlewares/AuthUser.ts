import jwt from 'jsonwebtoken'
import jwtConfig from '../../infra/config/jwt'
import { NextFunction, Request, Response } from 'express'

interface Payload {
    id: string
}

export async function authenticateUser(req: Request, 
    res: Response,
    next: NextFunction
    ){
    
        try {
            if(!jwtConfig.secretKey) {
                throw new Error("Secret key not provided")
            }
            const authorization = req.headers.authorization;
            if(!authorization) {
                return res.status(401).end()
            }
            const token = authorization.split(' ')[1]
            if(!token) {
                return res.status(401).end()
            }
            const {id} = jwt.verify(
                token,
                jwtConfig.secretKey
                ) as unknown as Payload
            
            return next();
        } catch (error) {
            return res.status(401).end()
        }
}