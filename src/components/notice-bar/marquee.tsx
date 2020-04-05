import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MarqueeProps } from './interface'
const { useState, useRef } = React
const defaultProps = {
  text: '',
  loop: false,
  leading: 500,
  trailing: 800,
  fps: 40,
  className: ''
}
interface StartAnimationProps {
  _marqueeTimer: React.MutableRefObject<number>
  animatedWidth: number
  overflowWidth: number
  setAnimatedWidth: React.Dispatch<React.SetStateAction<number>>
}
interface MeasureTextProps {
  textRef: React.MutableRefObject<HTMLDivElement | null>
  overflowWidth: number
  setOverflowWidth: React.Dispatch<React.SetStateAction<number>>
  marqueeRef: React.MutableRefObject<HTMLDivElement | null>
}

const _startAnimation = (
  props: MarqueeProps,
  { _marqueeTimer, animatedWidth, overflowWidth, setAnimatedWidth }: StartAnimationProps
) => {
  const { fps, leading } = props
  if (_marqueeTimer.current) {
    window.clearTimeout(_marqueeTimer.current)
    _marqueeTimer.current = 0
  }

  const TIMEOUT = (1 / fps!) * 1000
  const isLeading = animatedWidth === 0
  const timeout = isLeading ? leading : TIMEOUT
  const animate = () => {
    const { loop, trailing } = props
    let _animatedWidth = animatedWidth + 1
    const isRoundOver = _animatedWidth > overflowWidth

    if (isRoundOver) {
      if (loop) {
        _animatedWidth = 0
      } else {
        return
      }
    }

    if (isRoundOver && trailing) {
      //fixme trailing 表示 loop 为 true 时，动画间停顿
      _marqueeTimer.current = window.setTimeout(() => {
        setAnimatedWidth(_animatedWidth)

        _marqueeTimer.current = window.setTimeout(() => {
          animate()
        }, TIMEOUT)
      }, trailing)
    } else {
      setAnimatedWidth(_animatedWidth)

      _marqueeTimer.current = window.setTimeout(() => {
        animate()
      }, TIMEOUT)
    }
  }
  if (overflowWidth !== 0) {
    //fixme 动画开启前停顿
    _marqueeTimer.current = window.setTimeout(() => {
      animate()
    }, timeout)
  }
}

const _measureText = ({
  textRef,
  overflowWidth,
  setOverflowWidth,
  marqueeRef
}: MeasureTextProps) => {
  const container = ReactDOM.findDOMNode(marqueeRef.current)
  const node: any = textRef.current
  if (container && node) {
    const containerWidth = (container as any).offsetWidth
    const textWidth = node.offsetWidth
    const _overflowWidth = textWidth - containerWidth
    if (_overflowWidth !== overflowWidth) {
      setOverflowWidth(_overflowWidth)
    }
  }
}
const Marquee: React.SFC<MarqueeProps> & {
  defaultProps: Partial<MarqueeProps>
} = props => {
  const { prefixCls, className, text } = props
  const [animatedWidth, setAnimatedWidth] = useState(0)
  const [overflowWidth, setOverflowWidth] = useState(0)
  const textRef = useRef<HTMLDivElement | null>(null)
  const marqueeRef = useRef<HTMLDivElement | null>(null)
  const _marqueeTimer = useRef<number>(0)
  React.useEffect(() => {
    _measureText({
      textRef,
      overflowWidth,
      setOverflowWidth,
      marqueeRef
    })
    _startAnimation(props, { _marqueeTimer, animatedWidth, overflowWidth, setAnimatedWidth })
    return () => {
      clearTimeout(_marqueeTimer.current)
    }
  }, [])
  React.useEffect(() => {
    _measureText({
      textRef,
      overflowWidth,
      setOverflowWidth,
      marqueeRef
    })
  })
  React.useEffect(() => {
    _startAnimation(props, { _marqueeTimer, animatedWidth, overflowWidth, setAnimatedWidth })
  }, [_marqueeTimer.current, animatedWidth, overflowWidth])

  const style: React.CSSProperties = {
    position: 'relative',
    right: animatedWidth,
    whiteSpace: 'nowrap',
    display: 'inline-block',
    ...props.style
  }
  return (
    <div
      className={`${prefixCls}-marquee-wrap ${className}`}
      ref={marqueeRef}
      style={{ overflow: 'hidden' }}
      role="marquee"
    >
      <div ref={textRef} className={`${prefixCls}-marquee`} style={style}>
        {text}
      </div>
    </div>
  )
}

Marquee.defaultProps = defaultProps
export default Marquee
