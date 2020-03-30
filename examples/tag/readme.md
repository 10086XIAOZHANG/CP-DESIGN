# Tag 标签

标签的展示

## 引入组件

```jsx
import * as React from 'react'
import { Tag, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function TagDemo() {
  const [checked, setChecked] = useState(false)
  const onChange = (checked: boolean) => {
    setChecked(checked)
  }
  return (
    <div>
      <h1>Tag 标签</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag checked={checked} onChange={onChange}>
            Selected
          </Tag>
        </Col>
      </Row>
      <h3>关闭</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag closable onClose={() => console.log('close')}>
            Closable
          </Tag>
        </Col>
      </Row>
      <h3>尺寸</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag>Basic</Tag>
          <Tag size="small" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag size="large" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag closable onClose={() => console.log('close')}>
            Closable
          </Tag>
        </Col>
      </Row>
      <h3>颜色</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag color="blue">Basic</Tag>
          <Tag color="red" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="orange" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="yellow" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="green" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="purple" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
        </Col>
      </Row>
      <h3>大小</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag color="blue" size="small">
            Basic
          </Tag>
          <Tag color="red" style={{ marginLeft: 10 }} size="small">
            Basic
          </Tag>
          <Tag color="orange" style={{ marginLeft: 10 }} size="small">
            Basic
          </Tag>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性      |                            说明                            |            类型            |    默认值 |  可选  |
| --------- | :--------------------------------------------------------: | :------------------------: | --------: | :----: |
| type      | 选中类型，可选值为 'primary' ,'ticked',设置 checked 时有效 |           string           | 'primary' |   --   |
| size      |                 标签大小，可选值为 'small'                 |           string           |  'normal' | string | -- | -- |
| disabled  |                设置禁用,设置 checked 时有效                |          boolean           |        -- |   --   |
| onChange  |            标签选中时的回调,设置 checked 时有效            | (checked: boolean) => void |        -- |   --   |
| checked   |                        标签是否选中                        |          boolean           |     false |   --   |
| className |                          样式类名                          |         fun():void         |        -- |   --   |
| closable  |                      标签是否可以关闭                      |          boolean           |     false |   --   |
| onClose   |                     点击关闭按钮的回调                     |        fun() : void        |        -- |   --   |
| onClick   |                       点击标签的回调                       |        fun() : void        |        -- |   --   |
| style     |                         自定义样式                         |           Object           |        -- |   --   |
| color     |                          标签颜色                          |           string           |        -- |   --   |
