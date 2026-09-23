import { emailConfig } from "../config/config";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmail";
import { VerificationEmailData } from "../types/email.types";
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

}

 