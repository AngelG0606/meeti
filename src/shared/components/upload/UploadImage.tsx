import toast from "react-hot-toast"
import { UploadDropzone } from "../../utils/uploadthing"
import { useState } from "react"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import { CommunityInput } from "@/src/features/communities/types"
import { FormError } from "../forms"

export default function UploadImage() {

    const [uploadedImage, setUploadedImage] = useState('')

    const { formState : { errors }, setValue } = useFormContext<CommunityInput>()


    return (
        <>
            <UploadDropzone
                endpoint={'meetiUploader'}
                onClientUploadComplete={(res) => {
                    toast.success('Imagen Subida')
                    setUploadedImage(res[0].url)
                    setValue('image', res[0].url, {
                        shouldValidate : true
                    })
                }}
                appearance={{
                    button: 'bg-orange-600 font-semibold w-full h-auto py-2 rounded-none',
                    label: 'text-sky-500 text-sm',
                    allowedContent: 'text-sm',

                }}
                content={{
                    button: 'SUBIR IMAGEN',
                    label: 'Elige un archivo a arrastralo aquí',
                    allowedContent: 'Maximo 1 Imagen 1MB'
                }}
            />

            {errors.image &&  (
                <FormError>{errors.image.message}</FormError>
            )}

            {uploadedImage && (
                <>
                    <p className="text-lg font-bold">Imagen Nueva</p>

                    <Image
                        src={uploadedImage}
                        alt="Imagen publicada"
                        height={300}
                        width={300}
                    />
                </>


            )}
        </>
    )
}
