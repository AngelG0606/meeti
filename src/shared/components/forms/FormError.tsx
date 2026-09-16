
type Props = {
    children : React.ReactNode
}

export default function FormError({children} : Props) {
  return (
    <div className="text-red-700 text-sm py-2 w-full">
        {children}
    </div>
  )
}
