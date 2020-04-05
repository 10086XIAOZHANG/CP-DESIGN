import * as React from 'react'
import Classnames from 'classnames'
import Icon from '../icon'
import Marquee from './marquee'
import { NoticeBarProps } from './interface'
import './style'
const { useState } = React
interface ExtraPropsType {
  onClick?: () => void
}
const prefixCls = 'cp-ui-notice-bar'
const defaultProps = {
  prefixCls: prefixCls,

  icon: <Icon type="volume-up" size="16" />,
  onClick() {}
}
const _onClick = (
  props: NoticeBarProps,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { mode = '', onClick } = props
  if (onClick) {
    onClick()
  }
  if (mode === 'closable') {
    setShow(false)
  }
}
const getClassNames = (prefixCls?: string, className?: string) => {
  return Classnames(prefixCls, className)
}
const NoticeBar: React.SFC<NoticeBarProps> & {
  defaultProps: Partial<NoticeBarProps>
} = props => {
  const [show, setShow] = useState<boolean>(true)
  const {
    mode = '',
    icon,
    onClick,
    children,
    className,
    prefixCls,
    action,
    marqueeProps,
    ...restProps
  } = props

  const extraProps: ExtraPropsType = {}
  let operationDom: any = null
  if (mode === 'closable') {
    operationDom = (
      <div
        className={`${prefixCls}-operation`}
        onClick={() => {
          _onClick(props, setShow)
        }}
        role="button"
        aria-label="close"
      >
        {action ? action : <Icon type="times" size="md" />}
      </div>
    )
  } else {
    if (mode === 'link') {
      operationDom = (
        <div className={`${prefixCls}-operation`} role="button" aria-label="go to detail">
          {action ? action : <Icon type="angle-right" size="md" />}
        </div>
      )
    }
    extraProps.onClick = onClick
  }
  const classStr = getClassNames(prefixCls, className)
  return show ? (
    <div className={classStr} {...restProps} {...extraProps} role="alert">
      {icon && (
        <div className={`${prefixCls}-icon`} aria-hidden="true">
          {icon}
        </div>
      )}
      <div className={`${prefixCls}-content`}>
        <Marquee prefixCls={prefixCls} text={children as string} {...marqueeProps} />
      </div>
      {operationDom}
    </div>
  ) : null
}

NoticeBar.defaultProps = defaultProps
export default NoticeBar
