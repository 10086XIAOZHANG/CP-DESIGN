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
  prefixCls: 'cp-ui-affix'
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

const getStyle = (
  { useSticky, offsetTop, offsetBottom }: AffixProps,
  style: React.CSSProperties
) => {
  let styleCopy: React.CSSProperties = {}
  if (useSticky) return style
  styleCopy.position = 'sticky'
  if (offsetBottom === undefined) {
    styleCopy.top = offsetTop
  } else {
    styleCopy.bottom = offsetBottom
  }
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
const getOffsetTop = (offsetTop?: number, offsetBottom?: number) => {
  let _offsetTop = 0
  if (offsetBottom === undefined && offsetTop === undefined) {
    offsetTop = 0
  } else {
    _offsetTop = offsetTop ?? 0
  }
  return _offsetTop
}
const handleScroll = ({
  props,
  setStyle,
  wrapperRef,
  affixed,
  setAffixed,
  setOuterStyle
}: ScrollProps) => {
  const { offsetBottom } = props
  wrapperScollStyle(
    { props, setStyle, wrapperRef, affixed, setAffixed, setOuterStyle },
    offsetBottom !== undefined
  )
}
const wrapperScollStyle = (
  { props, setStyle, wrapperRef, affixed, setAffixed, setOuterStyle }: ScrollProps,
  isButtom = false
) => {
  let style: React.CSSProperties = {}
  const { offsetTop, offsetBottom, onChange } = props
  const rect = (wrapperRef.current as any).getBoundingClientRect()
  const { top, bottom, left, width, height } = rect
  let scrollPos = top
  if (isButtom) {
    scrollPos = bottom
  }
  // 对affixed做判断避免多余的setState
  if (scrollPos > getOffsetTop(props.offsetTop, props.offsetBottom)) {
    if (affixed) {
      style.position = 'relative'
      handleChange({ onChange, setAffixed, setStyle, affixed: false, style })
      setOuterStyle({})
    }
  } else {
    if (!affixed) {
      style = {
        position: 'fixed',
        left: left
      }
      if (!isButtom) {
        style.top = offsetTop
      } else {
        style.bottom = offsetBottom
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
