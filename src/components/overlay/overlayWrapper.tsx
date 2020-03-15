import * as React from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { OverlayProps } from './interface'
import Overlay from './overlay'

const noop = () => {}
const { useState } = React

const defaultProps: OverlayProps = {
  prefixCls: 'cp-ui-overlay',
  visible: false,
  mask: true,
  maskClosable: true,
  closable: false,
  autoFix: false,
  destroy: true,
  onClose: noop,
  maskAnimationName: 'fade',
  animationName: 'fade'
}

const setBodyStyle = (visible: boolean) => {
  document.body.style.overflow = visible ? 'hidden' : 'auto'
}

const OverlayWrapper: React.SFC<OverlayProps> & { defaultProps: Partial<OverlayProps> } = props => {
  const [firstTime, setFirstTime] = useState(true)
  const { visible, destroy, prefixCls } = props

  if (visible) {
    if (firstTime) {
      setFirstTime(false)
    }
  }

  // 处理destroy为false的时候第一次没动画的问题
  const getUnmount = () => {
    let props: any = {}
    if (destroy) {
      props.unmountOnExit = true
    } else {
      if (firstTime) {
        props.unmountOnExit = true
      } else {
        props.unmountOnExit = false
      }
    }
    return props
  }

  if (!destroy) {
    setBodyStyle(visible)
  }
  return createPortal(
    <CSSTransition
      in={props.visible}
      timeout={300}
      classNames={`${prefixCls}-fade`}
      {...getUnmount()}
    >
      <Overlay {...props} />
    </CSSTransition>,
    document.body
  )
}

OverlayWrapper.defaultProps = defaultProps

export default OverlayWrapper
