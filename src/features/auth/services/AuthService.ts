import { auth } from "@/src/lib/auth";
import { SignUp } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";


class AuthService {

    constructor(
        private authRepository : IAuthRepository
    ) {}

    async register(data : SignUp) {
        const { name, email, password} = data

        //Revisar si el usuario existe
        const userExist = await this.authRepository.userExists(email)
        if(userExist) {
            return {
                error : 'Usuario ya registrado',
                success : ''
            }
        }
        //Manejar el registro
        await auth.api.signUpEmail({
            body : {
                name, email, password,
                callbackURL : 'http://localhost:3000/auth/login'
            }
        })

        return {
            error : '',
            success : 'Cuenta creada correctamente, Revisa tu E-mail'
        }

    }

}

export const authService = new AuthService(authRepository)