import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../db'
import * as schema from '../db/schema'
import { nextCookies } from 'better-auth/next-js'
import { AuthEmailService } from '../emails/services/AuthEmailService'
import { EmailService } from '../emails/services/EmailService'

export const auth = betterAuth({
    database : drizzleAdapter(db, {
        provider : 'pg',
        schema,
        usePlural : true
    }),
    emailAndPassword : {
        enabled : true,
        requireEmailVerification : true,
        sendResetPassword : async ({user, url }) => {
            const data = {
                name : user.name,
                email : user.email,
                url
            }
            await AuthEmailService.sendRequestPasswordEmail(data)
        }
    },
    emailVerification : {
        sendOnSignIn : true,
        autoSignInAfterVerification : true,
        sendVerificationEmail : async({user, url}) => {
            const data = {
                name : user.name,
                email : user.email,
                url : url
            }
            await AuthEmailService.sendVerificationEmail(data)
        },
        
        
    },
   plugins : [nextCookies()]
})
