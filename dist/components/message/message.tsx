import * as React from 'react'
import { InstanceProps } from './interface'
// import Toast from './toast'

const noop = () => {}

const defaultProps: InstanceProps = {
  size: 'normal',
  shape: 'filled',
  duration: 3000,
  onClick: noop,
  onClose: noop
}

const Message: React.FC<InstanceProps> & { defaultProps: Partial<InstanceProps> } = props => {
  const { children } = props

  return <div className="cp-ui-message-group">{children}</div>
}

Message.defaultProps = defaultProps

export default Message
