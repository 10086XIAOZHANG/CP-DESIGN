import * as React from 'react'
import { SegmentedControl, Row, Col } from '../../src/components'
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
