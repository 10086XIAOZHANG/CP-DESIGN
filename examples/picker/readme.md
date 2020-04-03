# Picker 选择器

选择器的展示

## 引入组件

```jsx
import * as React from 'react'
import { Picker, Button, Row, Col } from 'cp-design'
```

## Demo 代码

```jsx
interface ValueProps {
  year: string
  month: string
  day: string
}
interface OptionProps {
  year: string[]
  month: string[]
  day: string[]
}
interface GroupsProps {
  valueGroups: ValueProps
  optionGroups: OptionProps
}
const { useState } = React

const generateNumberArray = (begin: number, end: number) => {
  let array = []
  for (let i = begin; i <= end; i++) {
    array.push((i < 10 ? '0' : '') + i)
  }
  return array
}

export default function PickerDemo() {
  const [valueGroups, setValueGroups] = useState<ValueProps>({
    year: '1989',
    month: '08',
    day: '12'
  })
  const [checkedValue, setCheckedValue] = useState<ValueProps>({
    year: '',
    month: '',
    day: ''
  })
  const [optionGroups, setOptionGroups] = useState<OptionProps>({
    year: generateNumberArray(1970, 2015),
    month: generateNumberArray(1, 12),
    day: generateNumberArray(1, 31)
  })
  const handleChange = (name: string, value: string) => {
    const nextState: GroupsProps = {
      optionGroups: {
        ...optionGroups
      },
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }
    if (name === 'year' && valueGroups.month === '02') {
      const yearValue = parseInt(value)
      if ((yearValue % 4 === 0 && yearValue % 100 !== 0) || yearValue % 400 === 0) {
        nextState.optionGroups = {
          ...optionGroups,
          day: generateNumberArray(1, 29)
        }
      } else {
        nextState.optionGroups = {
          ...optionGroups,
          day: generateNumberArray(1, 28)
        }
      }
    } else if (name === 'month') {
      if (value === '02') {
        nextState.optionGroups = {
          ...optionGroups,
          day: generateNumberArray(1, 28)
        }
      } else if (
        ['01', '03', '05', '07', '08', '10', '12'].indexOf(value) > -1 &&
        ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups.month) < 0
      ) {
        nextState.optionGroups = {
          ...optionGroups,
          day: generateNumberArray(1, 31)
        }
      } else if (
        ['01', '03', '05', '07', '08', '10', '12'].indexOf(value) < 0 &&
        ['01', '03', '05', '07', '08', '10', '12'].indexOf(valueGroups.month) > -1
      ) {
        nextState.optionGroups = {
          ...optionGroups,
          day: generateNumberArray(1, 30)
        }
      }
    }
    setOptionGroups(nextState.optionGroups)
    setValueGroups(nextState.valueGroups)
  }
  const onOk = (value: object) => {
    setCheckedValue(value as ValueProps)
  }
  return (
    <div>
      <h1>Picker 选择器</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Picker valueGroups={valueGroups} data={optionGroups} onChange={handleChange} onOk={onOk}>
            <Button>Picker</Button>
          </Picker>
        </Col>
      </Row>
      <div style={{ marginBottom: '1rem' }}>
        当前选择:
        {checkedValue.year ? (
          <span style={{ color: 'green' }}>
            `{checkedValue.year}年{checkedValue.month}月{checkedValue.day}日`
          </span>
        ) : (
          '--'
        )}
      </div>
    </div>
  )
}


//Picker
```

## Api

| 属性            |                    说明                    |                 类型                  | 默认值 | 可选 |
| --------------- | :----------------------------------------: | :-----------------------------------: | -----: | :--: |
| data            |         数据集合 key 对应数组集合          |                object                 |     -- |  --  |
| valueGroups     | value 对象类型,key 和数据集合中 key 相对应 |                object                 |     -- |  --  |
| onChange        |                选中后的回调                | (name: string, value: string) => void |     -- |  --  |
| prefixCls       |        class 前缀 默认 cp-ui-picker        |                string                 |     -- |  --  |
| className       |                  样式类名                  |              fun():void               |     -- |  --  |
| onVisibleChange |          当显隐状态变化时回调函数          |      (visible: boolean) => void       |     -- |  --  |
| okText          |                 选中的文案                 |          React.ReactElement           |     -- |  --  |
| dismissText     |               取消选中的文案               |          React.ReactElement           |     -- |  --  |
| onOk            |            点击选中时执行的回调            |        (value: object) => void        |     -- |  --  |
| onDismiss       |            点击取消时执行的回调            |              () => void               |     -- |  --  |
