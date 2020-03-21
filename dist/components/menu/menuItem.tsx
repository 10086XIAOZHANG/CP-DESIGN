import * as React from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './interface'
import Context from './context'

const defaultProps: MenuItemProps = {
  disabled: false
}

const prefixCls = 'cp-ui-menu-item'

const getClassName = (selectedKey: string[], key: string) => {
  return classNames(prefixCls, {
    [`${prefixCls}-selected`]: selectedKey.includes(key)
  })
}

const MenuItem: React.SFC<MenuItemProps> & { defaultProps: Partial<MenuItemProps> } = props => {
  const { itemKey, style } = props
  const { selectedKeys, onClick, onSelect } = React.useContext(Context)
  const classStr = getClassName(selectedKeys, itemKey as string)

  const handleClick = () => {
    if (!selectedKeys.includes(itemKey as string)) {
      const cloneSelectedKeys = []
      cloneSelectedKeys.push(itemKey as string)
      onSelect(itemKey as string, cloneSelectedKeys)
    }
    onClick(itemKey as string)
  }

  return (
    <React.Fragment>
      <li className={classStr} onClick={handleClick} style={style}>
        {props.children}
      </li>
    </React.Fragment>
  )
}

MenuItem.defaultProps = defaultProps

export default MenuItem
