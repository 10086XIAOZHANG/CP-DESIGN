# Progress 进度条

进度条的展示

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

| 属性        |                            说明                            |                 类型                 |    默认值 | 可选 |
| ----------- | :--------------------------------------------------------: | :----------------------------------: | --------: | :--: |
| percent     |                         进度百分比                         |                number                |         0 |  --  |
| position    | 进度条的位置，fixed 将浮出固定在最顶层，可选: fixed normal |                string                |    normal |  --  |
| unfilled    |                    是否显示未填充的轨道                    |               boolean                |      true |  --  |
| showInfo    |                    是否显示进度条的数值                    |               boolean                |      true |  --  |
| status      |               'normal' , 'success' , 'error'               |                string                |    normal |  --  |
| width       |                        进度条的宽度                        |                number                |        -- |  --  |
| textRender  |                  圆形的时候的文本渲染函数                  | (percent: number) => React.ReactNode |        -- |  --  |
| activeColor |                        进度条的颜色                        |                string                | ‘#ff5454’ |  --  |
