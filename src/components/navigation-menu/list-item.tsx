import { ReactNode } from 'react'

interface ListItemProps {
  children: ReactNode
}

export function ListItem({ children }: ListItemProps) {
  return <li>{children}</li>
}
