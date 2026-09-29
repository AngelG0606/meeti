"use client"
import { FormError, FormInput, FormLabel } from "@/src/shared/components/forms";
import FormTextArea from "@/src/shared/components/forms/FormTextArea";
import { useFormContext } from "react-hook-form";
import { CommunityInput } from "../types";
import UploadImage from "@/src/shared/components/upload/UploadImage";

export default function CommunityForm() {

  const {register, formState : { errors } } = useFormContext<CommunityInput>()

  return (
    <>
        <FormLabel htmlFor="name">Nombre Comunidad</FormLabel>
        <FormInput 
            type="text"
            id="name"
            placeholder="Libros, Ejercicio, Vacaciones"
            {...register("name")}
        />

        {errors.name && (
          <FormError>{errors.name.message}</FormError>
        )}

        <FormLabel>Imagen Comunidad</FormLabel>
        <UploadImage />
        
    
        <FormLabel htmlFor="description">Nombre Comunidad</FormLabel>
        <FormTextArea 
            id="description"
            placeholder="Descripcion Comunidad"
            {...register('description')}
        />

        

        {errors.description && (
          <FormError>{errors.description.message}</FormError>
        )}

    </>
  )
}
