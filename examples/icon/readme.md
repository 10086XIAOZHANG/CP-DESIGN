# Icon 图标

图标的展示

## 引入组件

```jsx
import * as React from 'react'
import { Icon, Row, Col } from 'cp-ui-design'
```

## Demo 代码

```jsx
export default function ButtonDemo() {
  return (
    <div>
      {data.map((item, index) => {
        if (index !== 0 && (index + 1) % 3 === 0) {
          return (
            <Row style={{ marginBottom: '1rem', textAlign: 'center' }} key={index}>
              <Col span={8}>
                {data[index - 2].icon}
                <p>{data[index - 2].text}</p>
              </Col>
              <Col span={8}>
                {data[index - 1].icon}
                <p>{data[index - 1].text}</p>
              </Col>
              <Col span={8}>
                {item.icon}
                <p>{data[index].text}</p>
              </Col>
            </Row>
          )
        }
        return null
      })}
    </div>
  )
}
```

## Api

| 属性  |      说明      |           类型            | 默认值 | 可选 |
| ----- | :------------: | :-----------------------: | -----: | :--: |
| type  | 内置 icon 名称 |          string           |     -- |  --  |
| size  |    图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg' |     md |  --  |
| color |    图标颜色    |           Color           | '#000' |  --  |
