import * as React from 'react'
import classNames from 'classnames'
import { MenuProps, SubMenuProps, MenuItemProps, MenuGroupProps } from './interface'
import Context from './context'
import SubMenu from './submenu'
import MenuGroup from './menuGroup'
import MenuItem from './menuItem'

import './style/index.scss'

interface MenuStatic {
  SubMenu: React.SFC<SubMenuProps> & { defaultProps: Partial<SubMenuProps> }
  MenuGroup: React.SFC<MenuGroupProps>
  MenuItem: React.SFC<MenuItemProps> & { defaultProps: Partial<MenuItemProps> }
}

const noop = () => {}

const defaultProps: MenuProps = {
  mode: 'vertical',
  selectedKeys: [],
  openKeys: [],
  theme: 'light',
  onClick: noop,
  onOpenChange: noop,
  onSelect: noop
}

const prefixCls = 'cp-ui-menu'

const getClassName = ({ mode, theme }: MenuProps) => {
  return classNames(`${prefixCls}`, {
    [`${prefixCls}-${mode}`]: mode,
    [`${prefixCls}-${theme}`]: theme
  })
}

const getProvideValue = ({
  selectedKeys,
  openKeys,
  onClick,
  onOpenChange,
  onSelect
}: MenuProps) => {
  return {
    selectedKeys,
    openKeys,
    onClick,
    onOpenChange,
    onSelect
  }
}

const Menu: React.FC<MenuProps> & { defaultProps: Partial<MenuProps> } & MenuStatic = props => {
  const classStr = getClassName(props)
  const value = getProvideValue(props)
  return (
    <ul className={classStr} style={props.style}>
      <Context.Provider value={value}>{props.children}</Context.Provider>
    </ul>
  )
}

Menu.defaultProps = defaultProps
Menu.SubMenu = SubMenu
Menu.MenuGroup = MenuGroup
Menu.MenuItem = MenuItem

export default Menu
