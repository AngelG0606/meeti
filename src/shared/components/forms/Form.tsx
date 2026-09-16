import clsx from "clsx"
import { FormHTMLAttributes } from "react"

type Props = FormHTMLAttributes<HTMLFormElement>

export default function Form(props : Props) {

  const { className } = props

  return (
    <form className={clsx("mt-10 space-y-3 p-5 shadow bg-white rounded-lg", className)} {...props}>
      {props.children} 
    </form>
  )
}
