import * as React from 'react'
import ClassNames from 'classnames'
import { AffixProps } from './interface'
import { getPrefixCls } from '../utils'

interface ChangeProps {
  setAffixed: React.Dispatch<React.SetStateAction<boolean>>
  setStyle: React.Dispatch<React.SetStateAction<{}>>
  affixed: boolean
}
// scroll的数据定义
interface ScrollProps extends ChangeProps {
  props: AffixProps
  wrapperRef: React.RefObject<HTMLDivElement>
  setOuterStyle: React.Dispatch<React.SetStateAction<{}>>
}

// 提取共有部分的定义
interface UseAffixProps extends ChangeProps {
  onChange: (affixed: boolean) => void
  style: React.CSSProperties
}

const noop = () => {}
const { useRef, useState, useEffect } = React

const defaultProps: AffixProps = {
  onChange: noop,
  useSticky: false,
  prefixCls: 'cp-ui-affix',
  offsetTop: 0
}

const getScrollTarget = ({ container }: AffixProps) => {
  if (container === undefined) return window
  return container()
}

const getClassNames = ({ useSticky, prefixCls }: AffixProps) => {
  return ClassNames(prefixCls, {
    [getPrefixCls(prefixCls, 'use-sticky')]: useSticky
  })
}

const getStyle = ({ useSticky, offsetTop }: AffixProps, style: React.CSSProperties) => {
  let styleCopy: React.CSSProperties = {}
  if (useSticky) return style
  styleCopy.position = 'sticky'
  styleCopy.top = offsetTop
  return styleCopy
}

const setEventListener = (props: AffixProps, listener: () => void) => {
  const container = getScrollTarget(props)
  container.addEventListener('scroll', listener)
  return container
}

const handleChange = ({ onChange, setAffixed, setStyle, affixed, style }: UseAffixProps) => {
  onChange(affixed)
  setAffixed(affixed)
  setStyle(style)
}

const handleScroll = ({
  props,
  setStyle,
  wrapperRef,
  affixed,
  setAffixed,
  setOuterStyle
}: ScrollProps) => {
  const { offsetTop, onChange } = props
  let style: React.CSSProperties = {}
  const rect = (wrapperRef.current as any).getBoundingClientRect()
  const { top, left, width, height } = rect
  // 对affixed做判断避免多余的setState
  if (top > offsetTop) {
    if (affixed) {
      style.position = 'relative'
      handleChange({ onChange, setAffixed, setStyle, affixed: false, style })
      setOuterStyle({})
    }
  } else {
    if (!affixed) {
      style = {
        position: 'fixed',
        top: offsetTop,
        left: left
      }
      handleChange({ onChange, setAffixed, setStyle, affixed: true, style })
      setOuterStyle({ width, height })
    }
  }
}

const Affix: React.FC<AffixProps> & { defaultProps: Partial<AffixProps> } = props => {
  const { useSticky } = props
  const wrapperRef = useRef(null)
  const targetRef = useRef(null)
  const [style, setStyle] = useState({})
  // 需要对外部容器设置宽高否则会内容闪到上面
  const [outerStyle, setOuterStyle] = useState({})
  const [affixed, setAffixed] = useState(false)
  const wrapperStyle = getStyle(props, style)
  useEffect(() => {
    if (useSticky) {
      const listener = () => {
        handleScroll({ props, setStyle, wrapperRef, affixed, setAffixed, setOuterStyle })
      }
      const container = setEventListener(props, listener)
      return () => {
        container.removeEventListener('scroll', listener)
      }
    }
    return () => {}
  }, [useSticky])

  const classStr = getClassNames(props)
  return (
    <div ref={wrapperRef} className={classStr} style={useSticky ? outerStyle : wrapperStyle}>
      <div ref={targetRef} style={wrapperStyle}>
        {props.children}
      </div>
    </div>
  )
}

Affix.defaultProps = defaultProps

export default Affix
