import * as React from 'react'

export type ModeEnum = 'vertical' | 'horizontal' | 'inline'

export type ThemeEnum = 'light' | 'dark'

export interface MenuProps {
  // mode 菜单的类型支持垂直， 水平， 内嵌
  mode: ModeEnum
  // selectedKeys 选中的keys
  selectedKeys: Array<string>
  // openKeys 当前展开的 SubMenu 菜单项 key 数组
  openKeys: Array<string>
  // theme 主题颜色
  theme: ThemeEnum
  // onClick 点击menuItem的时候调用此函数
  onClick: (key: string) => void
  // onOpenChange 展开关闭的回调
  onOpenChange: (openKeys: string[]) => void
  // onSelect被选中时候调用，重复点击只会调用一次
  onSelect: (key: string, selectedKeys: Array<string>) => void
  // style
  style?: React.CSSProperties
}

export interface MenuItemProps {
  // disabled 是否禁用 默认为false
  disabled: boolean
  // key item的标志 用来判断是否选中的时候用的
  itemKey?: string
  style?: React.CSSProperties
}

export interface SubMenuProps {
  // 子项
  children?: Array<MenuItemProps | SubMenuProps>
  // disabled 是否禁用
  disabled: boolean
  // key 唯一标志
  openKey?: string
  // title 子菜单选项
  title?: string | React.ReactNode
  // onTitleClick 点击子菜单的回调
  onTitleClick: (key: string) => void
  style?: React.CSSProperties
}

export interface MenuGroupProps {
  title?: React.ReactNode
  key?: string
  style?: React.CSSProperties
}
