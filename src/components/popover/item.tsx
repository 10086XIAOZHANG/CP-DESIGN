import * as React from 'react'
import Classnames from 'classnames'
import { PopoverItemProps } from './interface'

const defaultProps = {
  prefixCls: 'cp-ui-popover',
  disabled: false
}

const getClassNames = ({ prefixCls, className, disabled }: PopoverItemProps) => {
  return Classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled
  })
}

const Item: React.FC<PopoverItemProps> & {
  defaultProps: Partial<PopoverItemProps>
  itemName: string
} = props => {
  const {
    children,
    className,
    prefixCls,
    icon,
    disabled,
    firstItem,
    activeStyle,
    ...restProps
  } = props
  const classStr = getClassNames(props)

  return (
    <div className={classStr} {...restProps}>
      <div className={`${prefixCls}-item-container`}>
        {icon ? (
          <span className={`${prefixCls}-item-icon`} aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span className={`${prefixCls}-item-content`}>{children}</span>
      </div>
    </div>
  )
}

Item.defaultProps = defaultProps
Item.itemName = 'PopoverItem'

export default Item
