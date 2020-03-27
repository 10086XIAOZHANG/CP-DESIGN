import * as React from 'react'
import { Slider, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
const { useState } = React
export default function SliderDemo() {
  const [value, setValue] = useState<number>(33)
  const [value1, setValue1] = useState<number>(33)
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
