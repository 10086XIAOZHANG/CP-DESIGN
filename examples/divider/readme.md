# Divider 分割线

分割线的展示

## 引入组件

```jsx
import * as React from 'react'
import { Divider, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function ButtonDemo() {
  const onClick = () => {}
  return (
    <div>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider />
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider>With Text</Divider>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider dashed />
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider orientation="left">Left Text</Divider>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
          <Divider orientation="right">Right Text</Divider>
          <p>
            Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman,
            chief executive officer, and a co-founder of Apple Inc.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <p>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
          </p>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性        |                       说明                        |  类型   |       默认值 | 可选 |
| ----------- | :-----------------------------------------------: | :-----: | -----------: | :--: |
| type        | 水平还是垂直类型，可选值为 horizontal 或 vertical | String  | "horizontal" |  --  |
| orientation | 分割线标题的位置，可选值为 left、right 或 center  | Number  |       center |  --  |
| dashed      |                     是否虚线                      | Boolean |        false |  --  |
