import * as React from 'react'
import { PickerPanel, Row, Col } from '../../src/components'
const { useState } = React
export default function PickerPanelDemo() {
  const [valueGroups, setValueGroups] = useState({
    title: 'Mr.',
    firstName: 'Micheal',
    secondName: 'Jordan'
  })

  const optionGroups = {
    title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
    firstName: ['John', 'Micheal', 'Elizabeth'],
    secondName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
  }

  const handleChange = (name: string, value: string) => {
    console.log(name, value)
    setValueGroups({
      ...valueGroups,
      [name]: value
    })
  }
  return (
    <div>
      <h1>PickerPanel 选择器</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <PickerPanel
            optionGroups={optionGroups}
            valueGroups={valueGroups}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </div>
  )
}
