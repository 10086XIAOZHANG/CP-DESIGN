import * as React from 'react'
import ClassNames from 'classnames'
import { SwipeActionProps, BtnProps } from './interface'
import './style'
const prefixCls = 'cp-ui-swipe-action'
const destoryTouchEvent = () => {
  //fixed me 在React中使用DOM原声事件的时候一定要在组件卸载的时候手动移除，以免内存泄漏
  document.body.removeEventListener('touchmove', () => {})
}
const onSiderContentTouchCancel = (
  e: React.TouchEvent<HTMLDivElement>,
  isMoving: boolean,
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
  setStartTouchX: React.Dispatch<React.SetStateAction<number>>
) => {
  e.preventDefault()
  if (!isMoving) {
    return
  }
  setIsMoving(false)
  setStartTouchX(0)
}
const onSiderContentTouchEnd = (
  e: React.TouchEvent<HTMLDivElement>,
  props: SwipeActionProps,
  directionRef: React.MutableRefObject<string>,
  sliderContentRef: React.MutableRefObject<HTMLDivElement | null>,
  isMoving: boolean,
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  const { onOpen, onClose, disabled } = props
  if (disabled || !isMoving) {
    return
  }
  setIsMoving(false)
  const sliderButton = document.getElementsByClassName(`${prefixCls}-button`)[0]

  const sliderButtonWidth = (sliderButton as HTMLAnchorElement).offsetWidth * 2

  const sliderContentComponent = sliderContentRef.current
  if (!sliderContentComponent) {
    return
  }

  if (directionRef.current === 'left') {
    sliderContentComponent.style.left = `-${sliderButtonWidth}px`
    onOpen && onOpen()
  } else if (directionRef.current === 'right') {
    sliderContentComponent.style.left = '0px'
    onClose && onClose()
  }

  // 取消过渡效果
  sliderContentComponent.style.transition = '0.3s all ease-in'
}
const onSiderContentTouchStart = (
  e: React.TouchEvent<HTMLDivElement>,
  setStartTouchX: React.Dispatch<React.SetStateAction<number>>
) => {
  e.preventDefault()
  const startTouchX = e.targetTouches[0].pageX
  setStartTouchX(startTouchX)
}
const onSiderContentTouchMove = (
  e: React.TouchEvent<HTMLDivElement>,
  props: SwipeActionProps,
  directionRef: React.MutableRefObject<string>,
  sliderContentRef: React.MutableRefObject<HTMLDivElement | null>,
  isMoving: boolean,
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
  prevX: number,
  setPrevX: React.Dispatch<React.SetStateAction<number>>,
  startTouchX: number
) => {
  const { right, disabled } = props
  const length = right.length
  e.preventDefault()
  if (disabled || !isMoving) {
    setIsMoving(true)
    return
  }
  let currentComponent = sliderContentRef.current
  if (!currentComponent) {
    return
  }
  const sliderButton = document.getElementsByClassName(`${prefixCls}-button`)[0]

  let sliderButtonWidth = (sliderButton as HTMLAnchorElement).offsetWidth * length
  const currentX = e.targetTouches[0].pageX - startTouchX
  currentComponent.style.transition = ''

  let currentComponentOffset = currentComponent.offsetLeft
  console.log('currentComponentOffset', currentComponentOffset, -sliderButtonWidth)
  if (currentComponentOffset > 0 && directionRef.current === 'right') {
    currentComponentOffset = 0
  } else if (currentComponentOffset < -sliderButtonWidth && directionRef.current === 'left') {
    currentComponentOffset = -sliderButtonWidth
  }
  if (prevX) {
    if (currentComponentOffset <= 0 && currentComponentOffset >= -sliderButtonWidth) {
      if (currentX < prevX) {
        directionRef.current = 'left'
        currentComponent.style.left = currentComponentOffset - 1 + 'px'
      } else {
        directionRef.current = 'right'
        currentComponent.style.left = currentComponentOffset + 1 + 'px'
      }
    }
  }

  setPrevX(currentX)
}
const handleSliderButtonClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  props: SwipeActionProps,
  item: BtnProps,
  sliderContentRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  e.preventDefault()
  const { autoClose } = props
  if (autoClose && sliderContentRef.current) {
    sliderContentRef.current.style.transition = '0.5s all ease-in'

    window.setTimeout(() => {
      if (sliderContentRef.current) {
        sliderContentRef.current.style.left = '0px'
      }
    }, 10)
  }
  item.onPress && item.onPress()
}
const { useRef, useEffect, useState } = React
const defaultProps = {
  prefixCls: prefixCls,
  autoClose: true
}
const SwipeAction: React.SFC<SwipeActionProps> & {
  defaultProps: Partial<SwipeActionProps>
} = props => {
  const [prevX, setPrevX] = useState(0)
  const [isMoving, setIsMoving] = useState<boolean>(false)
  const [startTouchX, setStartTouchX] = useState<number>(0)
  const sliderWrapRef = useRef<HTMLDivElement | null>(null)
  const sliderContentRef = useRef<HTMLDivElement | null>(null)
  const directionRef = useRef<string>('')
  const { prefixCls, right } = props
  useEffect(() => {
    return () => {
      destoryTouchEvent()
    }
  }, [])
  return (
    <div className={ClassNames(prefixCls, `${prefixCls}-wrap`)} ref={sliderWrapRef}>
      <div
        className={`${prefixCls}-content`}
        ref={sliderContentRef}
        onTouchStart={e => {
          onSiderContentTouchStart(e, setStartTouchX)
        }}
        onTouchMove={e => {
          onSiderContentTouchMove(
            e,
            props,
            directionRef,
            sliderContentRef,
            isMoving,
            setIsMoving,
            prevX,
            setPrevX,
            startTouchX
          )
        }}
        onTouchEnd={e => {
          onSiderContentTouchEnd(e, props, directionRef, sliderContentRef, isMoving, setIsMoving)
        }}
        onTouchCancel={e => {
          onSiderContentTouchCancel(e, isMoving, setIsMoving, setStartTouchX)
        }}
      >
        {props.children}
      </div>
      {right.map((item: BtnProps, index: number) => {
        return (
          <a
            key={`${prefixCls}-button-${index}`}
            onClick={e => {
              handleSliderButtonClick(e, props, item, sliderContentRef)
            }}
            style={{ right: 70 * index }}
            className={ClassNames(`${prefixCls}-button`, item.style)}
          >
            <div className={`${prefixCls}-btn-text`}> {item.text}</div>
          </a>
        )
      })}
    </div>
  )
}
SwipeAction.defaultProps = defaultProps
export default SwipeAction
