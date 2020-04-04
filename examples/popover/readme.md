# Popover 气泡

气泡的展示

## 引入组件

```jsx
import * as React from 'react'
import { Popover, Icon, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
const { PopoverWapper, PopoverItem } = Popover
const { useState } = React
export default function PopoverDemo() {
  const [visible, setVisible] = useState(true)
  const [selected, setSelected] = useState('')
  console.log(selected)
  const onSelect = (opt: any) => {
    setSelected(opt.props.value)
    setVisible(false)
  }
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible)
  }
  return (
    <div>
      <h1>Popover 气泡</h1>
      <h3>基本</h3>
      <Row
        style={{
          marginBottom: '1rem',
          padding: '1.3rem .4rem',
          borderBottom: '1px solid #ccc'
        }}
        justify="space-between"
      >
        <Col span={16}>NavBar</Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <PopoverWapper
            mask
            visible={visible}
            overlay={[
              <PopoverItem key="4" icon={<Icon type="line-chart" size={18} />} data-seed="logId">
                Chart
              </PopoverItem>,
              <PopoverItem
                key="5"
                icon={<Icon type="qrcode" size={21} />}
                style={{ whiteSpace: 'nowrap' }}
              >
                My Qrcode
              </PopoverItem>,
              <PopoverItem key="6" icon={<Icon type="question-circle-o" size={20} />}>
                <span style={{ marginRight: 5 }}>Help</span>
              </PopoverItem>
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 }
            }}
            onVisibleChange={handleVisibleChange}
            onSelect={onSelect}
          >
            <div style={{ paddingRight: 5 }}>
              <Icon type="list" color={'red'} />
            </div>
          </PopoverWapper>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

包含 PopoverWapper 和 PopoverItem

###### PopoverWapper

| 属性            |           说明           |                                          类型                                           |                                   默认值 | 可选 |
| --------------- | :----------------------: | :-------------------------------------------------------------------------------------: | ---------------------------------------: | :--: |
| visible         |       当前显隐状态       |                                         Boolean                                         |                                    false |  --  |
| onVisibleChange | 当显隐状态变化时回调函数 |                                  (visible: bool): void                                  |                                       -- |  --  |
| placement       |           位置           | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} |                            'bottomRight' |  --  |
| mask            |    是否显示遮罩背景层    |                                         Boolean                                         |                                    false |  --  |
| overlay         |        弹出层内容        |                                        ReactNode                                        |                                       -- |  --  |
| onSelect        |  选中某选项时的回调函数  |                            (node: any, index?: number): void                            |                                       -- |  --  |
| align           |   rmc-tooltip 的 align   |                                         object                                          | { overflow: { adjustY: 0, adjustX: 0 } } |  --  |

###### PopoverItem

| 属性     |   说明    |   类型    | 默认值 | 可选 |
| -------- | :-------: | :-------: | -----: | :--: |
| disabled | 是否禁用  |  Boolean  |  false |  --  |
| style    | item 样式 |  Object   |     -- |  --  |
| icon     | 左侧图标  | ReactNode |     -- |  --  |
