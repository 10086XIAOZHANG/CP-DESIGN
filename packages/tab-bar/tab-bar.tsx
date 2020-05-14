import * as React from 'react'
import ClassNames from 'classnames'
import { TabBarProps, TabBarItemProps } from './interface'
import { Row, Col } from '../grid'
import Tabs from '../tabs'
import Badge from '../badge'
import './style'
const { useState } = React
const defaultProps: TabBarProps = {
  prefixCls: 'cp-ui-tab-bar',
  tabBarPosition: 'bottom',
  onPress: () => {}
}

const getClassNames = ({ className, prefixCls, hidden }: TabBarProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-hidden`]: hidden
  })
}
const wrapperBarge = (item: TabBarItemProps, children: React.ReactElement) => {
  if (item.dot || item.badge) {
    return (
      <Badge dot={item.dot} text={item.badge} status="success">
        {children}
      </Badge>
    )
  }
  return children
}
const wrapperOptions = ({ items, prefixCls }: TabBarProps, activeKey: string) => {
  if (items === undefined) {
    return []
  }
  return items.map((item, index) => {
    const currentKey = item.key ?? `cp-tab-bar-${index}`
    const itemEle = (
      <>
        <div className={`${prefixCls}-tab-icon`}>
          {activeKey === currentKey ? item.selectedIcon : item.icon}
        </div>
        <div className={`${prefixCls}-tab-title`}>
          {activeKey === currentKey ? item.selectedTitle : item.title}
        </div>
      </>
    )
    return {
      key: currentKey,
      tab: <div className={`${prefixCls}-tab`}>{wrapperBarge(item, itemEle)}</div>,
      content: (
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-content-inner`}>{item.content ?? ''}</div>
        </div>
      )
    }
  })
}
const TabBar: React.FC<TabBarProps> & { defaultProps: Partial<TabBarProps> } = props => {
  const [activeKey, setActiveKey] = useState('lift')
  const { barTintColor, onPress, tabBarPosition } = props
  const handleChange = (key: string) => {
    setActiveKey(key)
    onPress(key)
  }
  const options = wrapperOptions(props, activeKey)
  return (
    <div className={getClassNames(props)}>
      <Row style={{ height: '100%', width: '100%' }}>
        <Col span={24} style={{ height: '100%', width: '100%' }}>
          <Tabs
            activeKey={activeKey}
            tabTitleStyle={{ backgroundColor: barTintColor }}
            tabPosition={tabBarPosition}
            onChange={handleChange}
            options={options}
          />
        </Col>
      </Row>
    </div>
  )
}

TabBar.defaultProps = defaultProps
export default TabBar
