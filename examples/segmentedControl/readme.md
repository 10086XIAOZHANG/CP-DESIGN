# SegmentedControl 分段器

分段器的展示

## 引入组件

```jsx
import * as React from 'react'
import { SegmentedControl, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
export default function SegmentedControlDemo() {
  const onChange = (index: number, value: string) => {
    console.log(`selectedIndex:${index},selectedValue:${value}`)
  }
  const onValueChange = (value: string) => {
    console.log(value)
  }
  return (
    <div>
      <h1>SegmentedControl 分段器</h1>
      <h3>Simplest</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <SegmentedControl values={['Segment1', 'Segment2']} />
        </Col>
      </Row>
      <h3>disabled</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <SegmentedControl values={['Segment1', 'Segment2']} disabled />
        </Col>
      </Row>
      <h3>SelectedIndex</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <SegmentedControl selectedIndex={1} values={['Segment1', 'Segment2', 'Segment3']} />
        </Col>
      </Row>
      <h3>TintColor</h3>
      <SegmentedControl
        values={['Segment1', 'Segment2', 'Segment3']}
        tintColor={'#ff0000'}
        style={{ height: '40px', width: '250px' }}
      />
      <h3>onChange/onValueChange</h3>
      <SegmentedControl
        values={['Segment1', 'Segment2', 'Segment3']}
        onChange={onChange}
        onValueChange={onValueChange}
      />
    </div>
  )
}
```

## Api

| 属性          |                       说明                        |                  类型                  |  默认值 | 可选 |
| ------------- | :-----------------------------------------------: | :------------------------------------: | ------: | :--: |
| selectedIndex |                选项数组,值是字符串                |                 number                 |       0 |  --  |
| values        |                选项数组,值是字符串                |                string[]                |      -- |  --  |
| tintColor     |                    组件主色调                     |                 string                 | #ff5454 |  --  |
| disabled      |                     设置禁用                      |                boolean                 |   false |  --  |
| prefixCls     |           class 前缀 默认 cp-ui-segment           |                 string                 |      -- |  --  |
| className     |                     样式类名                      |                 string                 |      -- |  --  |
| onChange      | 回调函数,其中 index 是选中项索引,value 是选中的值 | (index: number, value: string) => void |      -- |  --  |
| style         |                    自定义样式                     |                 Object                 |      -- |  --  |
| onValueChange |                     回调函数                      |        (value: string) => void         |      -- |  --  |
