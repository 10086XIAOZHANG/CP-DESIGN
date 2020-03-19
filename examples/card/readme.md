# Card 卡片

卡片的展示

## 引入组件

```jsx
import * as React from 'react'
import { Card, Row, Col, Icon } from 'cp-ui-design'
```

## Demo 代码

```jsx
export default function ButtonDemo() {
  return (
    <div>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card>这是内容这是内容这是内容这是内容这是内容</Card>
        </Col>
      </Row>
      <h3>Card 通栏样式</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card title="这是标题" extra={<Icon type="apple" />} style={{ width: 300 }}>
            这是内容这是内容这是内容这是内容这是内容
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card
            title="这是标题"
            extra={<Icon type="android" />}
            actions={[
              {
                content: <div>这是底部1</div>,
                onClick: action('这是底部1')
              },
              {
                content: <div>这是底部2</div>,
                onClick: action('这是底部2')
              },
              {
                content: <div>这是底部3</div>,
                onClick: action('这是底部3')
              }
            ]}
            style={{ width: 300, marginTop: 20 }}
          >
            这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Card style={{ width: 300, marginTop: 20 }}>
            <div>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
              <div style={{ padding: 20, textAlign: 'center' }}>
                <div>This is the description</div>
                <div>Thank you, design</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性         |           说明            |         类型          | 默认值 | 可选 |
| ------------ | :-----------------------: | :-------------------: | -----: | :--: |
| title        |         卡片标题          | React.Element、String |     -- |  --  |
| extra        |     卡片标题辅助内容      | React.Element、String |     -- |  --  |
| actions      |      Array\<Action>       |      Action 数组      |     -- |  --  |
| onExtraClick |   卡片标题辅助内容点击    |      fun():void       |     -- |  --  |
| prefixCls    | class 前缀 默认 cp-ui-btn |        string         |     -- |  --  |
| className    |         样式类名          |      fun():void       |     -- |  --  |
| style        |        自定义样式         |        Object         |     -- |  --  |
