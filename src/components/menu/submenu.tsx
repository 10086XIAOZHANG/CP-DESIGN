import * as React from 'react'
import classNames from 'classnames'
import { SubMenuProps } from './interface'
import Icon from '../icon'
import context from './context'

const noop = () => {}
const prefixCls = 'cp-ui-menu-submenu'

const defaultProps: SubMenuProps = {
  disabled: false,
  onTitleClick: noop
}

const getCloneOpenKeys = (openKeys: string[], openKey: string) => {
  const cloneOpenKeys = openKeys.slice()
  const isInclude = cloneOpenKeys.includes(openKey)
  isInclude ? cloneOpenKeys.splice(cloneOpenKeys.indexOf(openKey), 1) : cloneOpenKeys.push(openKey)
  return cloneOpenKeys
}

const SubMenu: React.SFC<SubMenuProps> & { defaultProps: Partial<SubMenuProps> } = props => {
  const { title, children, openKey, onTitleClick, style } = props
  const { openKeys, onOpenChange } = React.useContext(context)

  const expanded = openKeys.includes(openKey as string)

  const handleClick = () => {
    const cloneOpenKeys = getCloneOpenKeys(openKeys, openKey as string)
    onOpenChange(cloneOpenKeys)
    onTitleClick(openKey as string)
  }

  const classStr = classNames(`${prefixCls}-list`, {
    [`${prefixCls}-hidden`]: !expanded
  })

  return (
    <React.Fragment>
      <li className={prefixCls}>
        <div className={`${prefixCls}-title`} onClick={handleClick} style={style}>
          <span>{title}</span>
          <Icon type={expanded ? 'up' : 'down'} />
        </div>
        <ul className={classStr}>{children}</ul>
      </li>
    </React.Fragment>
  )
}

SubMenu.defaultProps = defaultProps

export default SubMenu
