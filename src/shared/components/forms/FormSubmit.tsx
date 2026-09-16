import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export default function FormSubmit(props  : Props) {
  return (
    <>
        <input 
            {...props}
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white w-full py-2 font-semibold uppercase text-sm" 
        />
    </>
  )
}
