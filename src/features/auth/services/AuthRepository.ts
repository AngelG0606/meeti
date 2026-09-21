import { db } from "@/src/db"
import { User } from "../types/auth.types"


export interface IAuthRepository {
    userExists : (email : string) => Promise<User | undefined>
}

class AuthRepository implements IAuthRepository {
    async userExists(email : string) {
        const user = await db.query.users.findFirst({
            where: { email }
        })
        return user
    }
}

export const authRepository = new AuthRepository()
