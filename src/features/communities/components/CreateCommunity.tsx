"use client"

import { FormProvider, useForm } from "react-hook-form";
import CommunityForm from "./CommunityForm";
import { Form, FormSubmit } from "@/src/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommunitySchema } from "../schemas/communitySchema";
import { CommunityInput } from "../types";
import { createCommunityAction } from "../actions/community.action";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function CreateCommunity() {

  const methods = useForm<CommunityInput>({
    resolver : zodResolver(CommunitySchema),
    mode : 'all',
    defaultValues : {
      name : '',
      description : ''
    }
  })

  const onSubmit = async (formData : CommunityInput) => {
    const { error, success } = await createCommunityAction(formData)

    if(error) toast.error(error)

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
                value={'Crear Comunidad'}
            />
        </Form>
      </FormProvider>
    </>
  )
}
