import * as React from 'react'
import { PickerColumnProps } from './interface'
import ClassNames from 'classnames'
import './style'
interface TouchStartProps {
  setStartTouchY: React.Dispatch<React.SetStateAction<number>>
  scrollerTranslate: number
  setStartScrollerTranslate: React.Dispatch<React.SetStateAction<number>>
}
interface TouchMoveProps {
  isMoving: boolean
  startTouchY: number
  startScrollerTranslate: number
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>
  minTranslate: number
  maxTranslate: number
  setScrollerTranslate: React.Dispatch<React.SetStateAction<number>>
}
interface TouchEndProps {
  isMoving: boolean
  minTranslate: number
  maxTranslate: number
  setStartTouchY: React.Dispatch<React.SetStateAction<number>>
  scrollerTranslate: number
  setStartScrollerTranslate: React.Dispatch<React.SetStateAction<number>>
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>
}
interface TouchCancelProps {
  isMoving: boolean
  startScrollerTranslate: number
  setScrollerTranslate: React.Dispatch<React.SetStateAction<number>>
  setStartTouchY: React.Dispatch<React.SetStateAction<number>>
  scrollerTranslate: number
  setStartScrollerTranslate: React.Dispatch<React.SetStateAction<number>>
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>
}
const prefixCls = 'cp-ui-picker-column'

const { useState, useEffect } = React
const computeTranslate = (props: PickerColumnProps) => {
  const { options, value, itemHeight, columnHeight, name } = props
  let selectedIndex = options.indexOf(value)
  if (selectedIndex < 0) {
    // throw new ReferenceError();
    console.warn('Warning: "' + name + '" doesn\'t contain an option of "' + value + '".')
    onValueSelected(props, options[0])
    selectedIndex = 0
  }
  return {
    scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
    minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
    maxTranslate: columnHeight / 2 - itemHeight / 2
  }
}

const onValueSelected = (props: PickerColumnProps, newValue: string) => {
  const { onChange, name } = props
  onChange(name, newValue)
}

const handleTouchStart = (
  event: React.TouchEvent<HTMLDivElement>,
  { setStartScrollerTranslate, scrollerTranslate, setStartTouchY }: TouchStartProps
) => {
  event.preventDefault()
  const startTouchY = event.targetTouches[0].pageY
  setStartTouchY(startTouchY)
  setStartScrollerTranslate(scrollerTranslate)
}

const handleTouchMove = (
  event: React.TouchEvent<HTMLDivElement>,
  {
    isMoving,
    setIsMoving,
    setScrollerTranslate,
    startTouchY,
    startScrollerTranslate,
    minTranslate,
    maxTranslate
  }: TouchMoveProps
) => {
  event.preventDefault()
  const touchY = event.targetTouches[0].pageY
  if (!isMoving) {
    setIsMoving(true)
    return
  }

  let nextScrollerTranslate = startScrollerTranslate + touchY - startTouchY
  if (nextScrollerTranslate < minTranslate) {
    nextScrollerTranslate = minTranslate - Math.pow(minTranslate - nextScrollerTranslate, 0.8)
  } else if (nextScrollerTranslate > maxTranslate) {
    nextScrollerTranslate = maxTranslate + Math.pow(nextScrollerTranslate - maxTranslate, 0.8)
  }

  setScrollerTranslate(nextScrollerTranslate)
}

const handleTouchEnd = (
  event: React.TouchEvent<HTMLDivElement>,
  props: PickerColumnProps,
  {
    scrollerTranslate,
    minTranslate,
    maxTranslate,
    isMoving,
    setIsMoving,
    setStartTouchY,
    setStartScrollerTranslate
  }: TouchEndProps
) => {
  event.preventDefault()
  if (!isMoving) {
    return
  }
  setIsMoving(false)
  setStartTouchY(0)
  setStartScrollerTranslate(0)
  window.setTimeout(() => {
    const { options, itemHeight } = props
    let activeIndex
    if (scrollerTranslate > maxTranslate) {
      activeIndex = 0
    } else if (scrollerTranslate < minTranslate) {
      activeIndex = options.length - 1
    } else {
      activeIndex = -Math.floor((scrollerTranslate - maxTranslate) / itemHeight)
    }
    onValueSelected(props, options[activeIndex])
  }, 0)
}

const handleTouchCancel = (
  event: React.TouchEvent<HTMLDivElement>,
  {
    isMoving,
    setIsMoving,
    setStartTouchY,
    setStartScrollerTranslate,
    startScrollerTranslate,
    setScrollerTranslate
  }: TouchCancelProps
) => {
  event.preventDefault()
  if (!isMoving) {
    return
  }
  setScrollerTranslate(startScrollerTranslate)
  setIsMoving(false)
  setStartTouchY(0)
  setStartScrollerTranslate(0)
}

const handleItemClick = (props: PickerColumnProps, option: string) => {
  const { value, onClick, name } = props
  if (option !== value) {
    onValueSelected(props, option)
  } else {
    onClick(name, value)
  }
}

const renderItems = (props: PickerColumnProps) => {
  const { options, itemHeight, value } = props
  return options.map((option: string, index: number) => {
    const style = {
      height: itemHeight + 'px',
      lineHeight: itemHeight + 'px'
    }
    const className = `${prefixCls}-item ${option === value ? `${prefixCls}-item-selected` : ''}`
    return (
      <div
        key={index}
        className={className}
        style={style}
        onClick={() => handleItemClick(props, option)}
      >
        {option}
      </div>
    )
  })
}
const noop = () => {}
const defaultProps = {
  options: [],
  name: '',
  value: '',
  itemHeight: 0,
  columnHeight: 0,
  onChange: noop,
  onClick: noop
}
const PickerColumn: React.FC<PickerColumnProps> & {
  defaultProps: Partial<PickerColumnProps>
} = props => {
  const [isMoving, setIsMoving] = useState<boolean>(false)
  const [startTouchY, setStartTouchY] = useState<number>(0)
  const [startScrollerTranslate, setStartScrollerTranslate] = useState<number>(0)
  const [scrollerTranslate, setScrollerTranslate] = useState<number>(0)
  const [minTranslate, setMinTranslate] = useState<number>(0)
  const [maxTranslate, setMaxTranslate] = useState<number>(0)
  const translateString = `translate3d(0, ${scrollerTranslate}px, 0)`
  const style: React.CSSProperties = {
    msTransform: translateString,
    OTransform: translateString,
    WebkitTransform: translateString,
    transform: translateString
  }
  if (isMoving) {
    style.transitionDuration = '0ms'
  }
  useEffect(() => {
    const { scrollerTranslate, minTranslate, maxTranslate } = computeTranslate(props)
    setScrollerTranslate(scrollerTranslate)
    setMinTranslate(minTranslate)
    setMaxTranslate(maxTranslate)
  }, [props])
  return (
    <div className={ClassNames(`${prefixCls}`)}>
      <div
        className={`${prefixCls}-scroller`}
        style={style}
        onTouchStart={e => {
          handleTouchStart(e, { setStartTouchY, scrollerTranslate, setStartScrollerTranslate })
        }}
        onTouchMove={e => {
          handleTouchMove(e, {
            isMoving,
            setScrollerTranslate,
            startTouchY,
            startScrollerTranslate,
            minTranslate,
            maxTranslate,
            setIsMoving
          })
        }}
        onTouchEnd={e => {
          handleTouchEnd(e, props, {
            scrollerTranslate,
            minTranslate,
            maxTranslate,
            isMoving,
            setIsMoving,
            setStartTouchY,
            setStartScrollerTranslate
          })
        }}
        onTouchCancel={e => {
          handleTouchCancel(e, {
            isMoving,
            setIsMoving,
            setStartTouchY,
            setStartScrollerTranslate,
            scrollerTranslate,
            startScrollerTranslate,
            setScrollerTranslate
          })
        }}
      >
        {renderItems(props)}
      </div>
    </div>
  )
}
PickerColumn.defaultProps = defaultProps
export default PickerColumn
