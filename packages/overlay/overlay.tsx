import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import ClassNames from 'classnames'
import { OverlayProps } from './interface'
import Icon from '../icon'

const noop = () => {}
const { useEffect, useRef } = React

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

const getZIndex = (zIndex?: number) => {
  return zIndex
}

const getClassNames = ({ mask, className, visible, prefixCls }: OverlayProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-mask-show`]: mask,
    [`${prefixCls}-visible`]: visible
  })
}

const handleClose = (onClose: () => void) => {
  onClose()
}

const maskClick = (e: React.MouseEvent<HTMLDivElement>, props: OverlayProps) => {
  if (e.target === e.currentTarget) {
    handleClose(props.onClose)
  }
}

const animateEnter = ({ destroy }: OverlayProps, wrapRef: React.RefObject<HTMLDivElement>) => {
  if (!destroy) {
    ;(wrapRef.current as any).style.display = ''
  }
}

const animateLeave = ({ destroy }: OverlayProps, wrapRef: React.RefObject<HTMLDivElement>) => {
  if (!destroy) {
    ;(wrapRef.current as any).style.display = 'none'
  }
}

const renderMask = ({
  maskClassName,
  mask,
  prefixCls,
  zIndex,
  maskAnimationName,
  visible
}: OverlayProps) => {
  const classStr = ClassNames(`${prefixCls}-mask`, maskClassName)
  const zindex = getZIndex(zIndex)
  const style: React.CSSProperties = zindex ? { zIndex: zindex } : {}
  if (mask) {
    return (
      <CSSTransition in={visible} timeout={300} classNames={`${prefixCls}-${maskAnimationName}`}>
        <div className={classStr} style={style} />
      </CSSTransition>
    )
  }
  return null
}

const renderHeader = ({ header, prefixCls }: OverlayProps) => {
  if (header) {
    return <div className={`${prefixCls}-header`}>{header}</div>
  }
  return null
}

const renderClose = ({ closable, onClose, close, prefixCls }: OverlayProps) => {
  if (closable) {
    return (
      <div className={`${prefixCls}-close`} onClick={() => handleClose(onClose)}>
        {close || <Icon type="close" />}
      </div>
    )
  }
  return null
}

const renderFooter = ({ footer, prefixCls }: OverlayProps) => {
  if (footer) {
    return <div className={`${prefixCls}-footer`}>{footer}</div>
  }
  return null
}

const renderBody = (props: OverlayProps, wrapRef: React.RefObject<HTMLDivElement>) => {
  const { prefixCls, children, animationName, zIndex, visible } = props
  const zindex = getZIndex(zIndex)
  const style: React.CSSProperties = zIndex ? { zIndex: zindex } : {}
  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames={`${prefixCls}-${animationName}`}
      onEnter={() => animateEnter(props, wrapRef)}
      onExited={() => animateLeave(props, wrapRef)}
    >
      <div className={`${prefixCls}-container`} style={style}>
        {renderHeader(props)}
        {renderClose(props)}
        <div className={`${prefixCls}-body`}>{children}</div>
        {renderFooter(props)}
      </div>
    </CSSTransition>
  )
}

const Overlay: React.FC<OverlayProps> & { defaultProps: Partial<OverlayProps> } = props => {
  const { prefixCls, maskClosable } = props
  const classStr = getClassNames(props)
  const wrapRef = useRef(null)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div className={classStr} ref={wrapRef}>
      {renderMask(props)}
      <div
        className={`${prefixCls}-wrap`}
        onClick={
          maskClosable
            ? e => {
                maskClick(e, props)
              }
            : undefined
        }
      >
        {renderBody(props, wrapRef)}
      </div>
    </div>
  )
}

Overlay.defaultProps = defaultProps

export default Overlay
