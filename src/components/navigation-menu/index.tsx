import * as Navigation from '@radix-ui/react-navigation-menu'
import { ListItem } from './list-item'

export function NavigationMenu() {
  return (
    <Navigation.Root>
      <Navigation.List className="flex items-center rounded-md bg-project-gray-700">
        <Navigation.Item className="border-r-2 border-project-green-200">
          <Navigation.Trigger className="px-4 py-3 text-project-green-200">
            Home
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-14 w-[500px] p-9 sm:w-auto">
            <ul className="grid w-full grid-cols-2 bg-red-900">
              <ListItem>01</ListItem>
              <ListItem>02</ListItem>
              <ListItem>03</ListItem>
              <ListItem>04</ListItem>
              <ListItem>05</ListItem>
              <ListItem>06</ListItem>
              <ListItem>07</ListItem>
              <ListItem>08</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
        <Navigation.Item className="border-r-2 border-project-green-200">
          <Navigation.Trigger className="px-4 py-3 text-project-green-200">
            Financeiro
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-14 w-[500px] p-9 sm:w-auto">
            <ul className="grid w-full grid-cols-2 bg-red-900">
              <ListItem>03</ListItem>
              <ListItem>04</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
        <Navigation.Item className="border-r-2 border-project-green-200">
          <Navigation.Trigger className="px-4 py-3 text-project-green-200">
            Compras
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-14 w-[500px] p-9 sm:w-auto">
            <ul className="grid w-full grid-cols-2 bg-red-900">
              <ListItem>01</ListItem>
              <ListItem>02</ListItem>
              <ListItem>03</ListItem>
              <ListItem>04</ListItem>
              <ListItem>05</ListItem>
              <ListItem>06</ListItem>
              <ListItem>07</ListItem>
              <ListItem>08</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
        <Navigation.Item className="border-r-2 border-project-green-200">
          <Navigation.Trigger className="px-4 py-3 text-project-green-200">
            Vendas
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-14 w-[500px] p-9 sm:w-auto">
            <ul className="grid w-full grid-cols-2 bg-red-900">
              <ListItem>01</ListItem>
              <ListItem>02</ListItem>
              <ListItem>03</ListItem>
              <ListItem>04</ListItem>
              <ListItem>05</ListItem>
              <ListItem>06</ListItem>
              <ListItem>07</ListItem>
              <ListItem>08</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Trigger className="px-4 py-3 text-project-green-200">
            Relatórios
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-14 min-w-[500px] bg-project-gray-700 p-9 sm:w-auto">
            <ul className="grid w-full grid-cols-2 gap-11">
              <ListItem>
                <h5 className="text-base">Introdução</h5>
              </ListItem>
              <ListItem>02</ListItem>
              <ListItem>03</ListItem>
              <ListItem>04</ListItem>
              <ListItem>05</ListItem>
              <ListItem>06</ListItem>
              <ListItem>07</ListItem>
              <ListItem>08</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
      </Navigation.List>
    </Navigation.Root>
  )
}
