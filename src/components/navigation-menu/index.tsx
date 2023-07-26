import * as Navigation from '@radix-ui/react-navigation-menu'
import { ListItem } from './list-item'

export function NavigationMenu() {
  return (
    <Navigation.Root>
      <Navigation.List className="flex gap-16">
        <Navigation.Item>
          <Navigation.Trigger>Learn{' ->'}</Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-10 w-full sm:w-auto">
            <ul>
              <ListItem>01</ListItem>
              <ListItem>02</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Trigger>Learn</Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-10 w-full sm:w-auto">
            <ul>
              <ListItem>01</ListItem>
              <ListItem>02</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
        <Navigation.Item>
          <Navigation.Trigger>Learn</Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-10 w-full sm:w-auto">
            <ul>
              <ListItem>01</ListItem>
              <ListItem>02</ListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>
      </Navigation.List>
    </Navigation.Root>
  )
}
