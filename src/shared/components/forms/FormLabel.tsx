import { LabelHTMLAttributes } from "react"

type Props = LabelHTMLAttributes<HTMLLabelElement>

export default function FormLabel(props : Props) {
  return (
    <label {...props} htmlFor={props.htmlFor} className="block">
      {props.children}
    </label>
  )
}
