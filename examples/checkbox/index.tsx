import * as React from 'react'
import { Checkbox, CheckboxGroup, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function ButtonDemo() {
  const data = [
    { value: '0', label: 'Ph.D.', check: true },
    { value: '1', label: 'Bachelor', check: false },
    { value: '2', label: 'College diploma', check: false }
  ]
  const onChange = (val: string | number) => {
    console.log(val)
  }
  return (
    <div>
      <h1>Checkbox 复选框</h1>
      <h3>基本</h3>
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
          <Checkbox key="disabled" data-seed="logId" defaultChecked checked={false}>
            UndergraduateAuxiliary text
          </Checkbox>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <CheckboxGroup options={data} value={['1']}>
            UndergraduateAuxiliary text
          </CheckboxGroup>
        </Col>
      </Row>
    </div>
  )
}
