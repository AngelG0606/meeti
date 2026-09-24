import { emailConfig } from "../config/config";
import { renderPasswordResetEmail, renderPasswordResetEmailText } from "../templates/PasswordResetEmail";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmail";
import { PasswordResetEmailData, VerificationEmailData } from "../types/email.types";
import { EmailService } from "./EmailService";

export class AuthEmailService {

    static async sendVerificationEmail(data : VerificationEmailData) : Promise<void> {
        const { name, email, url} = data

        await EmailService.send({
            from : emailConfig.from.verification,
            to : email,
            subject : `${name} Verifica tu cuenta y forma parte de Meeti`,
            text : renderVerificationEmailText(data),
            html : renderVerificationEmail(data),
        })
    }

    static async sendRequestPasswordEmail(data : PasswordResetEmailData) : Promise<void> {
        const { name, email, url } = data

        await EmailService.send({
            from : emailConfig.from.passwordReset,
            to : email,
            subject : `${name} Has Solicitado Reestablecer tu Contraseña`,
            text : renderPasswordResetEmailText(data),
            html : renderPasswordResetEmail(data)
        })

        
    }

}

 