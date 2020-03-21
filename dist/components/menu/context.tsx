import * as React from 'react'

const noop = () => {}

interface ContextProps {
  selectedKeys: Array<string>
  openKeys: Array<string>
  onClick: (key: string) => void
  onOpenChange: (openKeys: string[]) => void
  onSelect: (key: string, selectedKeys: Array<string>) => void
}

const Context = React.createContext<ContextProps>({
  selectedKeys: [],
  openKeys: [],
  onClick: noop,
  onOpenChange: noop,
  onSelect: noop
})

export default Context
