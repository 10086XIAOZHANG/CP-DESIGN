# Button 按钮

Switch 滑动开关

## 引入组件

```jsx
import * as React from 'react'
import { Switch, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(true)
  return (
    <div>
      <h1>Switch 滑动开关</h1>
      <h3>基本</h3>
      <Row
        style={{
          marginBottom: '1rem',
          padding: '1.3rem .4rem',
          borderBottom: '1px solid #ccc'
        }}
        justify="space-between"
      >
        <Col span={8}>Off</Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Switch
            checked={checked}
            onChange={() => {
              setChecked(checked => !checked)
            }}
          />
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: '1rem',
          padding: '1.3rem .4rem',
          borderBottom: '1px solid #ccc'
        }}
        justify="space-between"
      >
        <Col span={8}>Disabled off</Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Switch
            checked={false}
            disabled
            onChange={() => {
              setChecked(checked => !checked)
            }}
          />
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: '1rem',
          padding: '1.3rem .4rem',
          borderBottom: '1px solid #ccc'
        }}
        justify="space-between"
      >
        <Col span={8}>Disabled on</Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Switch
            checked={true}
            disabled
            onChange={() => {
              setChecked(checked => !checked)
            }}
          />
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: '1rem',
          padding: '1.3rem .4rem',
          borderBottom: '1px solid #ccc'
        }}
        justify="space-between"
      >
        <Col span={8}>Color for iOS</Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Switch
            checked={checked1}
            color="red"
            onChange={() => {
              setChecked1(checked1 => !checked1)
            }}
          />
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: '1rem',
          padding: '1.3rem .4rem',
          borderBottom: '1px solid #ccc'
        }}
        justify="space-between"
      >
        <Col span={16}>Color for Android</Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Switch
            checked={checked2}
            platform="android"
            color="red"
            onChange={() => {
              setChecked2(checked2 => !checked2)
            }}
          />
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性      |                            说明                            |           类型           |    默认值 | 可选 |
| --------- | :--------------------------------------------------------: | :----------------------: | --------: | :--: |
| checked   |                        是否默认选中                        |         Boolean          |     false |  --  |
| disabled  |                          设置禁用                          |         boolean          |        -- |  --  |
| color     |                      开关打开后的颜色                      |          String          | ‘#ff5454’ |  --  |
| prefixCls |                class 前缀 默认 cp-ui-switch                |          string          |        -- |  --  |
| className |                          样式类名                          |        fun():void        |        -- |  --  |
| onChange  |                 change 事件触发的回调函数                  | (checked: boolean): void |        -- |  --  |
| size      |                          按钮尺寸                          |          number          |    normal |  --  |
| platform  | 设定组件的平台特有样式, 可选值为 android, ios， 默认为 ios |          String          |     'ios' |  --  |
