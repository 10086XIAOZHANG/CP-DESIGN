import * as React from 'react'
import ClassNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { MessageProps } from './interface'

const noop = () => {}
const { useState, useEffect } = React

const defaultProps: MessageProps = {
  size: 'normal',
  shape: 'filled',
  duration: 3000,
  onClick: noop,
  onClose: noop,
  animation: true,
  animationName: 'fade',
  prefixCls: 'cp-ui-message'
}

const getClassNames = ({ size, shape, className, icon, prefixCls }: MessageProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-icon`]: icon
  })
}

const renderIcon = ({ icon, prefixCls }: MessageProps) => {
  if (icon) {
    return <div className={`${prefixCls}-message-icon`}>{icon}</div>
  }
  return null
}

const renderChild = ({ children, prefixCls }: MessageProps) => {
  if (children) {
    return <div className={`${prefixCls}-body`}>{children}</div>
  }
  return null
}

const Toast: React.FC<MessageProps> & { defaultProps: Partial<MessageProps> } = props => {
  const [visible, setVisible] = useState(true)
  const { animationName, onClick, duration, onClose } = props
  const classStr = getClassNames(props)
  useEffect(() => {
    let timeOut: any
    if (duration) {
      timeOut = setTimeout(() => {
        setVisible(false)
        onClose()
      }, duration)
    }
    return () => {
      if (timeOut) {
        clearTimeout(timeOut)
      }
    }
  }, [setVisible])
  return (
    <CSSTransition timeout={500} classNames={animationName} unmountOnExit in={visible}>
      <div className={classStr} onClick={onClick}>
        {renderIcon(props)}
        {renderChild(props)}
      </div>
    </CSSTransition>
  )
}

Toast.defaultProps = defaultProps

export default Toast
