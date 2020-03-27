# Slider 滑动输入条

滑动输入条的展示

## 引入组件

```jsx
import * as React from 'react'
import { Slider, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
const { useState } = React
export default function SliderDemo() {
  const [value, setValue] = useState < number > 33
  const [value1, setValue1] = useState < number > 33
  const log = (name: string, value: number) => {
    console.log(`${name}: ${value}`)
    setValue(value)
  }
  const log1 = (name: string, value: number) => {
    console.log(`${name}: ${value}`)
    setValue1(value)
  }
  return (
    <div>
      <h1>Slider 滑动输入条</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Slider
            value={value}
            min={0}
            max={100}
            onChange={value => {
              log('change', value ?? 0)
            }}
            onAfterChange={value => {
              log('afterchange', value ?? 0)
            }}
          />
        </Col>
      </Row>
      <h3>Disabled slider</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Slider
            value={value1}
            min={0}
            max={100}
            disabled
            onChange={value1 => {
              log1('change', value1 ?? 0)
            }}
            onAfterChange={value1 => {
              log1('afterchange', value1 ?? 0)
            }}
          />
        </Col>
      </Row>
      <h3>Slider with customized color</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Slider
            defaultValue={26}
            min={0}
            max={30}
            trackStyle={{
              backgroundColor: 'red',
              height: '5px'
            }}
            railStyle={{
              backgroundColor: 'blue',
              height: '5px'
            }}
            handleStyle={{
              borderColor: 'blue',
              height: '14px',
              width: '14px',
              marginLeft: '-7px',
              marginTop: '-4.5px',
              backgroundColor: 'blue'
            }}
          />
        </Col>
      </Row>
    </div>
  )
}
```

## Api

| 属性              |                                                                     说明                                                                     |           类型            | 默认值 | 可选 |
| ----------------- | :------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------: | -----: | :--: |
| min               |                                                                    最小值                                                                    |          Number           |      0 |  --  |
| max               |                                                                    最大值                                                                    |          Number           |    100 |  --  |
| step              | 1 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 |      Number or null       |     -- |  --  |
| value             |                                                                 设置当前取值                                                                 |          Number           |     -- |  --  |
| defaultValue      |                                                                 设置初始取值                                                                 |          Number           |  false |  --  |
| disabled          |                                                                滑块为禁用状态                                                                |          Boolean          |  false |  --  |
| onChange          |                                  当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入                                  |         Function          |     -- |  --  |
| onAfterChange     |                                                ontouchend 触发时机一致，把当前值作为参数传入                                                 |         Function          |     -- |  --  |
| marks             |                                         刻度标记，key 的类型必须为 Number 且取值在闭区间 min, max 内                                         | Object{Number:String} { } |     -- |  --  |
| dots              |                                                             是否只能拖拽到刻度上                                                             |          Boolean          |  false |  --  |
| included          |                                     marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列                                     |          Boolean          |  false |  --  |
| maximumTrackStyle |                                             未选中 track 的样式(将被废弃，请使用 railStyle 代替)                                             |          Object           |  false |  --  |
| minimumTrackStyle |                                           选中部分的 track 样式 (将被废弃，请使用 trackStyle 代替)                                           |          Object           |  false |  --  |
| handleStyle       |                                                                  滑块的样式                                                                  |          Object           |  false |  --  |
| trackStyle        |                                                             选中部分滑动条的样式                                                             |          Object           |  false |  --  |
| railStyle         |                                                                  未选中部分                                                                  |          Object           |  false |  --  |
