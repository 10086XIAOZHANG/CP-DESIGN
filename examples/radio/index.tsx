import * as React from 'react'
import { Radio, Icon, Row, Col } from '../../src/components'
const { useState } = React
export default function RadioDemo() {
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState(0)
  const data = [
    { value: 0, label: 'credit-card', icon: <Icon type={'credit-card'} color={'red'} /> },
    {
      value: 1,
      label: 'cc-paypal',
      icon: <Icon type={'cc-paypal'} color={'rgba(220, 94, 44, 0.95)'} />
    },
    { value: 2, label: 'paypal', icon: <Icon type={'paypal'} color={'#813'} /> }
  ]
  const changeRadio = (checked: boolean) => {
    console.log('checkbox', checked)
    setChecked(!checked)
  }
  const onChange = (value: number) => {
    console.log('checkbox')
    setValue(value)
  }
  return (
    <div>
      <h1>Radio 单选框</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <span style={{ padding: '15px 10px 15px 0', color: '#888' }}>
            Radio demo(dustomized style)
          </span>
          <Radio checked={checked} disabled onChange={changeRadio} color={'#ff9813'}>
            Agree
          </Radio>
        </Col>
      </Row>
      <h3>禁用</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <span style={{ padding: '15px 10px 15px 0', color: '#888' }}>
            Radio demo(dustomized style)
          </span>
          <Radio disabled>禁用</Radio>
        </Col>
      </Row>
      <h3>多项选择</h3>
      {data.map(i => (
        <div
          key={i.value}
          onClick={() => {
            onChange(i.value)
          }}
        >
          <Row
            style={{
              marginBottom: '1rem',
              padding: '1.3rem .4rem',
              borderBottom: '1px solid #ccc'
            }}
            justify="space-between"
          >
            <Col span={8}>{i.icon}</Col>
            <Col span={8} style={{ textAlign: 'right' }}>
              <Radio checked={value === i.value} color={'#ff9813'} />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  )
}
