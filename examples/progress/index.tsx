import * as React from 'react'
import { Progress, Row, Col } from '../../src/components'
export default function ProgressDemo() {
  return (
    <div>
      <h1>Progress 进度条</h1>
      <Progress percent={40} position="fixed" />
      <h3>直线</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Progress percent={40} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Progress percent={40} unfilled={false} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Progress percent={40} activeColor="blue" />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Progress percent={40} showInfo={false} />
        </Col>
      </Row>

      <h3>圆型</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={12}>
          <Progress
            percent={40}
            textRender={() => {
              return null
            }}
            type="circle"
          />
        </Col>
        <Col span={12}>
          <Progress percent={40} type="circle" />
        </Col>
      </Row>
    </div>
  )
}
