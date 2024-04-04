import { compare, hash } from "bcryptjs";

export async function encryptPass(password: string,) {
    const passwordHash = await hash(String(password), 8);
    return passwordHash
}

export async function comparePass(password: string, passwordHash: string) {
    const passwordCompare = await compare(String(password), passwordHash);
    return passwordCompare
}