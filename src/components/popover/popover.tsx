import * as React from 'react'
import Tooltip from 'rmc-tooltip'
import { PopOverPropsType } from './interface'
import './style'

const recursiveCloneChildren = (
  children: any,
  cb = (ch: React.ReactChild, _: number) => ch
): React.ReactChild[] => {
  return React.Children.map(children, (child, index) => {
    const newChild = cb(child, index)
    if (
      typeof newChild !== 'string' &&
      typeof newChild !== 'number' &&
      newChild &&
      newChild.props &&
      newChild.props.children
    ) {
      return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb))
    }
    return newChild
  })
}

const defaultProps = {
  prefixCls: 'cp-ui-popover'
}

const Popover: React.FC<PopOverPropsType> & {
  defaultProps: Partial<PopOverPropsType>
} = props => {
  const {
    overlay,
    onSelect = () => {},
    align = { overflow: { adjustY: 0, adjustX: 0 } },
    placement = 'bottomRight',
    ...restProps
  } = props

  const overlayNode = recursiveCloneChildren(overlay, (child, index) => {
    const extraProps: any = { firstItem: false }
    if (
      child &&
      typeof child !== 'string' &&
      typeof child !== 'number' &&
      child.type &&
      // Fixme: not sure where the `itemName` came from.
      (child.type as any).itemName === 'PopoverItem' &&
      !child.props.disabled
    ) {
      extraProps.onClick = () => onSelect(child, index)
      extraProps.firstItem = index === 0
      return React.cloneElement(child, extraProps)
    }
    return child
  })
  const wrapperNode = <div className={`${props.prefixCls}-inner-wrapper`}>{overlayNode}</div>

  return <Tooltip align={align} placement={placement} {...restProps} overlay={wrapperNode} />
}
Popover.defaultProps = defaultProps
export default Popover
