import { SignUp } from "../schemas/authSchema";


class AuthService {

    constructor() {}

    async register(data : SignUp) {
        const { name, email, password} = data

        //Revisar si el usuario existe
        const userExist = ''


        //Validaciones de negocio

        //Manejar el registro
    }

}

export const authService = new AuthService()