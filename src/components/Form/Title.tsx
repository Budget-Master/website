import { ReactNode } from 'react'

interface TitleInterface {
  children: ReactNode
}

export function Title({ children }: TitleInterface) {
  return (
    <h1 className="text-center text-4xl font-bold text-project-green-200 xl:text-5xl 2xl:text-7xl">
      {children}
    </h1>
  )
}
