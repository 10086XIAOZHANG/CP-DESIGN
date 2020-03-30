import * as React from 'react'
import { Tag, Row, Col } from '../../src/components'
const { useState } = React
export default function TagDemo() {
  const [checked, setChecked] = useState(false)
  const onChange = (checked: boolean) => {
    setChecked(checked)
  }
  return (
    <div>
      <h1>Tag 标签</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag checked={checked} onChange={onChange}>
            Selected
          </Tag>
        </Col>
      </Row>
      <h3>关闭</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag closable onClose={() => console.log('close')}>
            Closable
          </Tag>
        </Col>
      </Row>
      <h3>尺寸</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag>Basic</Tag>
          <Tag size="small" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag size="large" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
        </Col>
      </Row>
      <h3>颜色</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag color="blue">Basic</Tag>
          <Tag color="red" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="orange" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="yellow" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="green" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
          <Tag color="purple" style={{ marginLeft: 10 }}>
            Basic
          </Tag>
        </Col>
      </Row>
      <h3>大小</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tag color="blue" size="small">
            Basic
          </Tag>
          <Tag color="red" style={{ marginLeft: 10 }} size="small">
            Basic
          </Tag>
          <Tag color="orange" style={{ marginLeft: 10 }} size="small">
            Basic
          </Tag>
        </Col>
      </Row>
    </div>
  )
}
