import * as React from 'react'
import ClassNames from 'classnames'
import PickerColumn from './picker-column'
import { PickerPanelProps } from './interface'
import './style'
const prefixCls = 'cp-ui-picker-panel'

const defaultProps = {
  onClick: () => {},
  itemHeight: 36,
  height: 216
}
const renderInner = (props: PickerPanelProps) => {
  const { optionGroups, valueGroups, itemHeight, height, onChange, onClick } = props

  const highlightStyle = {
    height: itemHeight,
    marginTop: -(itemHeight / 2)
  }

  const columnNodes = []
  for (let name in optionGroups) {
    if (optionGroups.hasOwnProperty(name)) {
      columnNodes.push(
        <PickerColumn
          key={name}
          name={name}
          options={optionGroups[name]}
          value={valueGroups[name]}
          itemHeight={itemHeight}
          columnHeight={height}
          onChange={onChange}
          onClick={onClick}
        />
      )
    }
  }
  return (
    <div className={`${prefixCls}-inner`}>
      {columnNodes}
      <div className={`${prefixCls}-highlight`} style={highlightStyle}></div>
    </div>
  )
}
const getClassNames = () => {
  return ClassNames(prefixCls, `${prefixCls}-container`)
}
const PickerPanel: React.FC<PickerPanelProps> & {
  defaultProps: Partial<PickerPanelProps>
} = props => {
  const { height } = props

  const style: React.CSSProperties = {
    height: height
  }
  const classStr = getClassNames()
  return (
    <div className={classStr} style={style}>
      {renderInner(props)}
    </div>
  )
}

PickerPanel.defaultProps = defaultProps

export default PickerPanel
