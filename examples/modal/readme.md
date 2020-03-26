# Button 按钮

按钮的展示

## 引入组件

```jsx
import * as React from 'react'
import { Button, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function ButtonDemo() {
  const onClick = () => {}
  return (
    <div>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={onClick}>default</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button disabled>default disabled</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button type="primary" onClick={onClick}>
            primary
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button type="primary" onClick={onClick} disabled>
            primary disabled
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={onClick} type="warning">
            warning
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={onClick} type="warning" disabled>
            warning disabled
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={onClick} loading>
            loading button
          </Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button>with icon</Button>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性      |                                                       说明                                                       |         类型         | 默认值 | 可选 |
| --------- | :--------------------------------------------------------------------------------------------------------------: | :------------------: | -----: | :--: |
| type      |                                按钮类型，可选值为 primary/ghost/warning 或者不设                                 |        string        |     -- |  --  |
| size      |                                         按钮大小，可选值为 large、small                                          |        string        |  large |  --  |
| disabled  |                                                     设置禁用                                                     |       boolean        |     -- |  --  |
| icon      | 可以是 Icon 组件里内置的某个 icon 的 type 值，也可以是任意合法的 ReactElement (注意: loading 设置后此项设置失效) | string/React.Element |     -- |  --  |
| prefixCls |                                            class 前缀 默认 cp-ui-btn                                             |        string        |     -- |  --  |
| className |                                                     样式类名                                                     |      fun():void      |     -- |  --  |
| onClick   |                                              点击按钮的点击回调函数                                              |     fun() : void     |     -- |  --  |
| style     |                                                    自定义样式                                                    |        Object        |     -- |  --  |
| loading   |                                                 是否出现正在加载                                                 |       boolean        |     -- |  --  |
