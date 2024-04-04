import z from "zod";

const  PASSWORD_VALIDATION_REGEX  = /((?=.*\d))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

export async function RegexPass(password: string)  {
    const regexPass = z.object({
        password: z.string().min(3).regex(PASSWORD_VALIDATION_REGEX)
    })

    return regexPass
}