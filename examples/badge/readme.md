# Badge 徽标数

徽标数的展示

## 引入组件

```jsx
import * as React from 'react'
import { Badge, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function BadgeDemo() {
  return (
    <div>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Badge dot status="default">
            <span
              style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }}
            />
          </Badge>
          <span
            style={{
              marginLeft: 12,
              height: '26px',
              lineHeight: '26px',
              display: 'inline-block',
              verticalAlign: 'top'
            }}
          >
            Dot badge
          </span>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Badge dot status="success">
            <span
              style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }}
            />
          </Badge>
          <span
            style={{
              marginLeft: 12,
              height: '26px',
              lineHeight: '26px',
              display: 'inline-block',
              verticalAlign: 'top'
            }}
          >
            Dot badge Success
          </span>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Badge text={'券1'} overflowCount={121}></Badge>
          <Badge
            text={'NEW'}
            overflowCount={121}
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#21b68a',
              borderRadius: 2
            }}
          ></Badge>
          <Badge
            text="自动缴费"
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#f19736',
              border: '1px solid #f19736'
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col
          span={24}
          style={{
            border: '1px solid #999',
            height: 42,
            overflow: 'hidden'
          }}
        >
          <Badge corner text={'促'} outStyle={{ height: 42, lineHeight: '42px' }}>
            <span
              style={{
                marginLeft: 12,
                display: 'inline-block'
              }}
            >
              Dot badge Success
            </span>
          </Badge>
        </Col>
      </Row>
    </div>
  )
}
```

| 属性          |                                            说明                                             |                          类型                          | 默认值 | 可选 |
| ------------- | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------: | -----: | :--: |
| text          | 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 \${overflowCount}+，为 0 时隐藏 |                         string                         |     -- |  --  | -- | -- |
| corner        |                                          置于角落                                           |                        boolean                         |     -- |  --  |
| disabled      |                                          设置禁用                                           |                        boolean                         |     -- |  --  |
| dot           |                                 不展示数字，只有一个小红点                                  |                  string/React.Element                  |     -- |  --  |
| overflowCount |                                      展示封顶的数字值                                       |                         number                         |     -- |  --  |
| status        |                               status 状态点 这个值对 dot 生效                               | 'success', 'default' , 'process' , 'warning' , 'error' |     -- |  --  |
| style         |                                      自定义样式(样式)                                       |                         Object                         |     -- |  --  |
| outStyle      |                                    外围自定义样式(样式)                                     |                         Object                         |     -- |  --  |
| hot           |                                          营销样式                                           |                        boolean                         |     -- |  --  |
