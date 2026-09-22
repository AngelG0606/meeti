import { auth } from "@/src/lib/auth";
import { SignIn, SignUp } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { headers } from "next/headers";
import { APIError } from "better-auth";

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async register(data: SignUp) {
    const { name, email, password } = data;

    //Revisar si el usuario existe
    const userExist = await this.authRepository.userExists(email);
    if (userExist) {
      return {
        error: "Usuario ya registrado",
        success: "",
      };
    }

    //Manejar el registro
    try {
      await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
          callbackURL: "http://localhost:3000/auth/login",
        },
      });

      return {
        error: "",
        success: "Cuenta creada correctamente, Revisa tu E-mail",
      };
    } catch (error) {
      if (error instanceof APIError) {
        return {
          error: error.message || "Hubo un error al crear tu cuenta",
          success: "",
        };
      }
      return {
        error: "Hubo un error al crear tu cuenta",
        success: "",
      };
    }
  }

  async login(credentials: SignIn) {
    const { email, password } = credentials;

    //Revisar si el usuario existe
    const user = await this.authRepository.userExists(email);
    if (!user) {
      return {
        error: "Usuario no registrado, crea una cuenta y únete a Meeti",
        success: "",
      };
    }

    //Verificar password y si confirmó la cuenta
    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/dashboard",
        },
        headers: await headers(),
      });

      return {
        error: "",
        success: "Sesión iniciada correctamente",
      };
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: "Contraseña Incorrecta",
          403: "Cuenta no ha sido confirmada, hemos enviado un E-mail",
        };

        const errorMessages = messages[error.statusCode];
        return {
          error: errorMessages || error.message || "Hubo un error al iniciar sesión",
          success: "",
        };
      }

      if (error instanceof Error) {
        return {
          error: error.message,
          success: "",
        };
      }

      return {
        error: "Hubo un error al iniciar sesión",
        success: "",
      };
    }
  }
}

export const authService = new AuthService(authRepository);
