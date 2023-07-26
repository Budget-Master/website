import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
}

export function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className="flex-1 rounded-xl bg-project-green-200 px-10 py-5 text-white"
      type="submit"
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
