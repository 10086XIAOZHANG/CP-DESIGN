import * as React from 'react'
import ClassNames from 'classnames'
import { SlideProps } from './interface'
import { Omit } from '../utils/type'

import './style/index.scss'

const noop = () => {}
const prefixCls = 'cp-ui-slide'
const { useRef, useEffect } = React

interface MouseRefType {
  startX: number
  startY: number
  endX: number
  endY: number
  mouseMove?: () => void
}

interface MouseEventProps {
  e: React.MouseEvent
  props: SlideProps
  mouseRef: React.RefObject<MouseRefType>
  railRef: React.RefObject<HTMLDivElement>
  slideRef: React.RefObject<HTMLDivElement>
}

interface MouseEventListener extends Omit<MouseEventProps, 'e'> {}

const defaultProps: SlideProps = {
  range: false,
  value: 0,
  onChange: noop,
  disabled: false,
  min: 0,
  max: 100,
  direction: 'horizontal',
  step: 1,
  tooltipVisible: false
}

const getClassNames = ({ range, disabled, direction, tooltipVisible }: SlideProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-range`]: range,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-${direction}`]: direction,
    [`${prefixCls}-tooltip`]: tooltipVisible
  })
}

const addMouseEvent = ({ railRef, props, mouseRef, slideRef }: MouseEventListener) => {
  const width = (railRef.current as any).getBoundingClientRect().width
  const slideCurrent = slideRef.current
  function mouseMove(e: any) {
    handleMouseMove(e, props, mouseRef, width)
  }
  ;(mouseRef.current as any).mouseMove = mouseMove
  ;(slideCurrent as any).addEventListener('mousemove', mouseMove)
}

const removeEvent = (
  mouseRef: React.RefObject<MouseRefType>,
  slideRef: React.RefObject<HTMLDivElement>
) => {
  const mouseMove = (mouseRef.current as any).mouseMove
  if (mouseMove) {
    const slideCurrent = slideRef.current
    slideCurrent && (slideCurrent as any).removeEventListener('mousemove', mouseMove)
    ;(mouseRef.current as any).mouseMove = null
  }
}

const handleMouseDown = ({ e, mouseRef, props, railRef, slideRef }: MouseEventProps) => {
  removeEvent(mouseRef, slideRef)
  ;(mouseRef.current as any).startX = e.pageX
  ;(mouseRef.current as any).startY = e.pageY
  addMouseEvent({ props, mouseRef, railRef, slideRef })
}

const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>,
  { onChange }: SlideProps,
  mouseRef: React.RefObject<MouseRefType>,
  width: number
) => {
  const mouseX = e.pageX
  const distanceX = mouseX - (mouseRef.current as any).startX
  onChange((distanceX / width) * 100)
}

const handleMouseUp = (
  e: React.MouseEvent<HTMLDivElement>,
  mouseRef: React.RefObject<MouseRefType>,
  slideRef: React.RefObject<HTMLDivElement>
) => {
  ;(mouseRef.current as any).endX = e.pageX
  ;(mouseRef.current as any).endY = e.pageY
  removeEvent(mouseRef, slideRef)
}

const handleBlur = (
  mouseRef: React.RefObject<MouseRefType>,
  slideRef: React.RefObject<HTMLDivElement>
) => {
  removeEvent(mouseRef, slideRef)
}

const Slide: React.FC<SlideProps> & { defaultProps: Partial<SlideProps> } = props => {
  const { range, marks, value } = props
  const classStr = getClassNames(props)
  const mouseRef = useRef<MouseRefType>({ startX: 0, startY: 0, endX: 0, endY: 0 })
  const railRef = useRef(null)
  const slideRef = useRef(null)
  const handleStyle: React.CSSProperties = range ? { left: `${value[0]}%` } : { left: `${value}%` }
  const handle2Style: React.CSSProperties = range ? { left: `${value[1]}&` } : {}
  const trackStyle: React.CSSProperties = range
    ? { left: `${value[0]}%`, width: `${value[1] - value[0]}&` }
    : { left: '0%', width: `${value}%` }

  useEffect(() => {
    return () => {
      removeEvent(mouseRef, slideRef)
    }
  }, [mouseRef, railRef, slideRef])

  return (
    <div
      className={classStr}
      onMouseDown={e => handleMouseDown({ e, props, mouseRef, railRef, slideRef })}
      onMouseUp={e => handleMouseUp(e, mouseRef, slideRef)}
      onMouseOut={() => handleBlur(mouseRef, slideRef)}
      ref={slideRef}
    >
      <div className={`${prefixCls}-rail`} ref={railRef} />
      <div className={`${prefixCls}-track`} style={trackStyle} />
      <div className={`${prefixCls}-handle`} style={handleStyle} />
      {range ? <div className={`${prefixCls}-handle2`} style={handle2Style} /> : null}
      {marks ? <div className={`${prefixCls}-marks`} /> : null}
    </div>
  )
}

Slide.defaultProps = defaultProps

export default Slide
