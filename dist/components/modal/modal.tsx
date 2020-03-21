import * as React from 'react'
import { ModalProps } from './interface'
import Overlay from '../overlay'
import Button from '../button'

import './style/index.scss'

const noop = () => {}

const defaultProps: ModalProps = {
  visible: false,
  prefixCls: 'cp-ui-modal',
  maskClosable: true,
  closable: true,
  okText: '确认',
  cancelText: '取消',
  destroy: true,
  onCancel: noop,
  onOk: noop
}

const handleCancel = ({ onCancel }: ModalProps) => {
  onCancel()
}

const handleOk = ({ onOk }: ModalProps) => {
  onOk()
}

const renderHeader = ({ title, prefixCls }: ModalProps) => {
  if (title) {
    return <div className={`${prefixCls}-title`}>{title}</div>
  }
  return null
}

const renderFooter = (props: ModalProps) => {
  const { okText, cancelText, prefixCls, footer } = props
  let com = null
  if (footer) {
    com = footer
  } else {
    com =
      footer === undefined ? (
        <React.Fragment>
          <Button onClick={() => handleCancel(props)} type="ghost">
            {cancelText}
          </Button>
          <Button onClick={() => handleOk(props)}>{okText}</Button>
        </React.Fragment>
      ) : (
        footer
      )
  }
  return <div className={`${prefixCls}-footer-container`}>{com}</div>
}

const Modal: React.SFC<ModalProps> & { defaultProps: Partial<ModalProps> } = props => {
  const {
    children,
    prefixCls,
    visible,
    closeIcon,
    className,
    maskAnimationName,
    maskClassName,
    animationName,
    destroy
  } = props
  return (
    <Overlay
      prefixCls={prefixCls}
      className={className}
      visible={visible}
      header={renderHeader(props)}
      footer={renderFooter(props)}
      close={closeIcon}
      onClose={() => handleCancel(props)}
      maskClassName={maskClassName}
      maskAnimationName={maskAnimationName}
      animationName={animationName}
      destroy={destroy}
      closable
    >
      <div className={`${prefixCls}-body-contain`}>{children}</div>
    </Overlay>
  )
}

Modal.defaultProps = defaultProps

export default Modal
