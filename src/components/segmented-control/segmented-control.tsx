import Classnames from 'classnames'
import * as React from 'react'
import { SegmentedControlProps } from './interface'
import './style'

const { useState, useEffect } = React
const prefixCls = 'cp-ui-segment'

const noop = () => {}
const defaultProps = {
  prefixCls: prefixCls,
  selectedIndex: 0,
  disabled: false,
  values: [],
  onChange: noop,
  onValueChange: noop,
  style: {},
  tintColor: ''
}

const getClassNames = ({ prefixCls, disabled, className }: SegmentedControlProps) => {
  return Classnames(className, prefixCls, {
    [`${prefixCls}-disabled`]: disabled
  })
}

const getItemClassNames = ({ prefixCls }: SegmentedControlProps, selected: boolean) => {
  return Classnames(`${prefixCls}-item`, {
    [`${prefixCls}-item-selected`]: selected
  })
}

const onClick = (
  props: SegmentedControlProps,
  index: number,
  value: string,
  selectedIndex: number,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  const { disabled, onChange, onValueChange } = props
  if (!disabled && selectedIndex !== index) {
    // just do a mock so that the api to be the same as react-native
    if (onChange) {
      onChange(index, value)
    }
    if (onValueChange) {
      onValueChange(value)
    }
    setSelectedIndex(index)
  }
}

const renderSegmentItem = (
  props: SegmentedControlProps,
  idx: number,
  value: string,
  selected: boolean,
  selectedIndex: number,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  const { prefixCls, disabled, tintColor } = props

  const itemStyle = {
    color: selected ? '#fff' : tintColor,
    backgroundColor: selected ? tintColor : 'transparent',
    borderColor: tintColor
  }

  const activeInnerStyle: any = tintColor
    ? {
        backgroundColor: tintColor
      }
    : {}
  const itemCls = getItemClassNames(props, selected)
  return (
    <div
      key={`${prefixCls}-item-${idx}`}
      className={itemCls}
      style={itemStyle}
      role="tab"
      aria-selected={selected && !disabled}
      aria-disabled={disabled}
      onClick={
        disabled ? undefined : () => onClick(props, idx, value, selectedIndex, setSelectedIndex)
      }
    >
      <div className={`${prefixCls}-item-inner`} style={activeInnerStyle} />
      {value}
    </div>
  )
}

const SegmentedControl: React.FC<SegmentedControlProps> & {
  defaultProps: Partial<SegmentedControlProps>
} = props => {
  const { style, values } = props
  const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex)

  useEffect(() => {
    setSelectedIndex(props.selectedIndex)
  }, [props.selectedIndex])

  const classStr = getClassNames(props)

  return (
    <div className={classStr} style={style} role="tablist">
      {values.map((value: string, idx: number) =>
        renderSegmentItem(props, idx, value, idx === selectedIndex, selectedIndex, setSelectedIndex)
      )}
    </div>
  )
}

SegmentedControl.defaultProps = defaultProps
export default SegmentedControl
