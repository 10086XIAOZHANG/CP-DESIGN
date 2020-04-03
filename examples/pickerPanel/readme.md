# PickerPanel 选择器

选择器的展示

## 引入组件

```jsx
import * as React from 'react'
import { PickerPanel, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function PickerPanelDemo() {
  const [valueGroups, setValueGroups] = useState({
    title: 'Mr.',
    firstName: 'Micheal',
    secondName: 'Jordan'
  })

  const optionGroups = {
    title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
    firstName: ['John', 'Micheal', 'Elizabeth'],
    secondName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
  }

  const handleChange = (name: string, value: string) => {
    console.log(name, value)
    setValueGroups({
      ...valueGroups,
      [name]: value
    })
  }
  return (
    <div>
      <h1>PickerPanel 选择器</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <PickerPanel
            optionGroups={optionGroups}
            valueGroups={valueGroups}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性         |                    说明                    |                 类型                  | 默认值 | 可选 |
| ------------ | :----------------------------------------: | :-----------------------------------: | -----: | :--: |
| optionGroups |         数据集合 key 对应数组集合          |                object                 |     -- |  --  |
| valueGroups  | value 对象类型,key 和数据集合中 key 相对应 |                object                 |     -- |  --  |
| onChange     |                选中后的回调                | (name: string, value: string) => void |     -- |  --  |
| prefixCls    |     class 前缀 默认 cp-ui-picker-panel     |                string                 |     -- |  --  |
| className    |                  样式类名                  |              fun():void               |     -- |  --  |
| onClick      |                点击回调函数                | (name: string, value: string) => void |     -- |  --  |
| itemHeight   |                 子项行高度                 |                number                 |     36 |  --  |
| height       |                  弹层高度                  |                number                 |    216 |  --  |
