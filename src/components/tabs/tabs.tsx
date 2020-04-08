import * as React from 'react'
import ClassNames from 'classnames'
import * as warning from 'warning'
import { TabsProps, TabsPositionTypes } from './interface'

import './style/index.scss'

interface TabClickProps {
  key: string
  activeKey?: string
  onChange: (value: string) => void
}

const noop = () => {}

// left and top
const leftTopPosition = new Set(['left', 'top'])
//  right and bottom
const rightBottomPosition = new Set(['right', 'bottom'])

const defaultProps: TabsProps = {
  type: 'line',
  onChange: noop,
  size: 'normal',
  tabPosition: 'top',
  prefixCls: 'cp-ui-tabs',
  options: [],
  onExtraClick: noop
}

const getPosition = (tabPosition: TabsPositionTypes) => {
  if (leftTopPosition.has(tabPosition) || rightBottomPosition.has(tabPosition)) return tabPosition
  return 'top'
}

const getClassNames = ({ className, tabPosition, size, type, prefixCls }: TabsProps) => {
  const position = getPosition(tabPosition)
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-${position}`]: position,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${type}`]: type
  })
}

const handleTab = ({ key, activeKey, onChange }: TabClickProps): void => {
  // 如果点击的就是当前的则什么都不处理
  if (key === activeKey) return
  onChange(key)
}

const renderTabTitle = ({
  options,
  activeKey,
  onChange,
  prefixCls,
  tabBarExtraContent,
  onExtraClick,
  tabTitleStyle
}: TabsProps) => {
  return (
    <div className={`${prefixCls}-tab`}>
      <div className={`${prefixCls}-tab-container`}>
        {options.map(option => {
          const classStr = ClassNames(`${prefixCls}-tab-item`, {
            [`${prefixCls}-tab-item-active`]: activeKey === option.key
          })
          return (
            <div
              className={classStr}
              style={tabTitleStyle}
              role="tab"
              onClick={() => handleTab({ key: option.key, activeKey: activeKey, onChange })}
              key={`${prefixCls}-${option.key}`}
            >
              {option.tab}
            </div>
          )
        })}
      </div>
      {tabBarExtraContent ? (
        <div className={`${prefixCls}-tab-extra`} onClick={onExtraClick}>
          {tabBarExtraContent}
        </div>
      ) : null}
    </div>
  )
}

const renderTabContent = ({ options, prefixCls, activeKey }: TabsProps) => {
  return (
    <div className={`${prefixCls}-content`}>
      {options.map(option => {
        const key = option.key
        const classStr = ClassNames(`${prefixCls}-tabpanel`, {
          [`${prefixCls}-tabpanel-active`]: key === activeKey
        })
        return (
          <div className={classStr} role="tabpanel" key={`${prefixCls}-${option.key}`}>
            {option.content}
          </div>
        )
      })}
    </div>
  )
}

const renderTopLeft = (props: TabsProps) => {
  return (
    <React.Fragment>
      {renderTabTitle(props)}
      {renderTabContent(props)}
    </React.Fragment>
  )
}

const renderBottomRight = (props: TabsProps) => {
  return (
    <React.Fragment>
      {renderTabContent(props)}
      {renderTabTitle(props)}
    </React.Fragment>
  )
}

const renderTabPosition = (props: TabsProps) => {
  const { tabPosition } = props
  if (leftTopPosition.has(tabPosition)) return renderTopLeft(props)
  if (rightBottomPosition.has(tabPosition)) return renderBottomRight(props)
  warning(false, '`tabPosition` should be one of [`left`, `right`, `bottom`, `top`]')
  return renderTopLeft(props)
}

const Tabs: React.FC<TabsProps> & { defaultProps: Partial<TabsProps> } = props => {
  const { style } = props
  return (
    <div className={getClassNames(props)} style={style}>
      {renderTabPosition(props)}
    </div>
  )
}

Tabs.defaultProps = defaultProps

export default Tabs
