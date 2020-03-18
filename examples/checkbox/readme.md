# Checkbox 复选框

复选框的展示

## 引入组件

```jsx
import * as React from 'react'
import { Checkbox, Checkou, Row, Col } from 'cp-ui-design'
```

## Demo 代码

```jsx
export default function CheckboxDemo() {
  return (
    <div>
      {data.map(i => (
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Checkbox key={i.value} onChange={() => onChange(i.value)} checked={i.check}>
              {i.label}
            </Checkbox>
          </Col>
        </Row>
      ))}
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Checkbox key="disabled" data-seed="logId" disabled defaultChecked>
            UndergraduateAuxiliary text
          </Checkbox>
        </Col>
      </Row>

      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Checkbox key="disabled" data-seed="logId" disabled defaultChecked>
            UndergraduateAuxiliary text
          </Checkbox>
        </Col>
      </Row>
    </div>
  )
}
```

## Api

##### Checkbox

| 属性           |           说明            |       类型       | 默认值 | 可选 |
| -------------- | :-----------------------: | :--------------: | -----: | :--: |
| defaultChecked |       初始是否选中        |     Boolean      |     -- |  --  |
| checked        |     指定当前是否选中      |     Boolean      |     -- |  --  |
| disabled       |         设置禁用          |     Boolean      |     -- |  --  |
| onChange       | change 事件触发的回调函数 | (e: Event): void |     -- |  --  |

##### checkboxGroup

| 属性         |              说明               |       类型       | 默认值 | 可选 |
| ------------ | :-----------------------------: | :--------------: | -----: | :--: |
| defaultValue |        默认值字符串数组         |     string[]     |     -- |  --  |
| value        |          指定选中 的项          |     string[]     |     -- |  --  |
| disabled     | 设置禁用 ,全部不可用 默认 false |     Boolean      |     -- |  --  |
| onChange     |    change 事件触发的回调函数    | (e: Event): void |     -- |  --  |
