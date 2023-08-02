interface ListItemProps {
  title: string
  description: string
}

export function ListItem({ title, description }: ListItemProps) {
  return (
    <li className="flex flex-col gap-1">
      <h5 className="text-base font-bold text-project-green-200">{title}</h5>
      <p className="text-sm font-light text-gray-100">{description}</p>
    </li>
  )
}
