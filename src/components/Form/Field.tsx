import { HTMLAttributes } from 'react'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps) {
  return <div {...props} className="flex w-full flex-col" />
}
