"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CommunitySchema, SelectCommunity } from "../schemas/communitySchema"
import { CommunityInput } from "../types"
import { Form, FormSubmit } from "@/src/shared/components/forms"
import CommunityForm from "./CommunityForm"
import { editCommunityAction } from "../actions/community.action"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

type Props = {
    community : SelectCommunity
}

export default function EditCommunity({ community } : Props) {

    const methods = useForm<CommunityInput>({
        resolver : zodResolver(CommunitySchema),
        mode : 'all',
        defaultValues : {
          name : community.name ?? '',
          description : community.description ?? '',
          image : community.image ?? null
        }
    })

    const onSubmit = async (formData : CommunityInput) => {
        const { error, success } = await editCommunityAction(formData, community.id)
    
        if(error) return toast.error(error)
        
        if(success) {
            toast.success(success)
            redirect('/dashboard/communities')
        }
    }

  return (
    <>
        <FormProvider {...methods}>
            <Form
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <CommunityForm />
                <FormSubmit 
                    value={'Guardar Cambios'}
                />
            </Form>
        </FormProvider>
    </>
  )
}
