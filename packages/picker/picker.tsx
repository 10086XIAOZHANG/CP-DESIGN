import * as React from 'react'
import ClassNames from 'classnames'
import PickerPanel from './picker-panel'
import { PickerProps } from './interface'
import './style'
const prefixCls = 'cp-ui-picker'
const { useState } = React
interface TogglePickerProps {
  isPickerShow: boolean
  setIsPickerShow: React.Dispatch<React.SetStateAction<boolean>>
}
const defaultProps = {
  onVisibleChange: () => {},
  okText: '确认',
  dismissText: '取消',
  title: ''
}

const getClassNames = () => {
  return ClassNames(`${prefixCls}`)
}
const getPickerModalClass = (isPickerShow: boolean) => {
  return `picker-modal${isPickerShow ? ' picker-modal-toggle' : ''}`
}
const togglePicker = (props: PickerProps, { isPickerShow, setIsPickerShow }: TogglePickerProps) => {
  const { onVisibleChange } = props
  setIsPickerShow(isPickerShow)
  onVisibleChange && onVisibleChange(isPickerShow)
}
const handleHeaderRight = (
  e: React.MouseEvent,
  props: PickerProps,
  setIsPickerShow: React.Dispatch<React.SetStateAction<boolean>>,
  valueGroups: object
) => {
  const { onOk } = props
  e.preventDefault()
  onOk && onOk(valueGroups)
  togglePicker(props, { isPickerShow: false, setIsPickerShow })
}
const handleHeaderLeft = (
  e: React.MouseEvent,
  props: PickerProps,
  setIsPickerShow: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { onDismiss } = props
  e.preventDefault()
  onDismiss && onDismiss()
  togglePicker(props, { isPickerShow: false, setIsPickerShow })
}
//Picker
const Picker: React.FC<PickerProps> & { defaultProps: Partial<PickerProps> } = props => {
  const { okText, dismissText, valueGroups, data, onChange, title } = props
  const [isPickerShow, setIsPickerShow] = useState<boolean>(false)

  const classStr = getClassNames()
  const pickerClassStr = getPickerModalClass(isPickerShow)
  const maskStyle = {
    display: isPickerShow ? 'block' : 'none'
  }

  return (
    <div className={classStr}>
      <div
        className="picker-modal-mask"
        style={maskStyle}
        onClick={() => {
          togglePicker(props, { isPickerShow: false, setIsPickerShow })
        }}
      ></div>
      <div className={pickerClassStr}>
        <header>
          <a
            href="#"
            className={`${prefixCls}-header-left`}
            onClick={e => {
              handleHeaderLeft(e, props, setIsPickerShow)
            }}
          >
            {dismissText}
          </a>
          <div>{title}</div>
          <a
            href="#"
            onClick={e => {
              handleHeaderRight(e, props, setIsPickerShow, valueGroups)
            }}
          >
            {okText}
          </a>
        </header>
        <PickerPanel optionGroups={data} valueGroups={valueGroups} onChange={onChange} />
      </div>
      <div
        onClick={() => {
          togglePicker(props, { isPickerShow: true, setIsPickerShow })
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

Picker.defaultProps = defaultProps

export default Picker
