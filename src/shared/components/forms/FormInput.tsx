import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export default function FormInput(props: Props) {
  return (
    <input
      {...props}
      className="border border-slate-200 w-full p-2"
    />
  )
}
