import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}
export function Input(props: InputProps) {
  const { register } = useFormContext()
  return (
    <input
      type="text"
      autoComplete="off"
      {...register(props.name)}
      {...props}
    />
  )
}
