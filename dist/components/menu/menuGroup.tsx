import * as React from 'react'
import { MenuGroupProps } from './interface'

const prefixCls = 'cp-ui-menu-group'

const MenuGroup: React.SFC<MenuGroupProps> = props => {
  const { title, children, style } = props
  return (
    <React.Fragment>
      <li className={prefixCls}>
        <div className={`${prefixCls}-title`} style={style}>
          {title}
        </div>
        <ul className={`${prefixCls}-list`}>{children}</ul>
      </li>
    </React.Fragment>
  )
}

export default MenuGroup
