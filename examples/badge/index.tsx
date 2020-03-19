import * as React from 'react'
import { Badge, Row, Col } from '../../src/components'
export default function BadgeDemo() {
  return (
    <div>
      <h1>Badge 徽标数</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Badge dot status="default">
            <span
              style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }}
            />
          </Badge>
          <span
            style={{
              marginLeft: 12,
              height: '26px',
              lineHeight: '26px',
              display: 'inline-block',
              verticalAlign: 'top'
            }}
          >
            Dot badge
          </span>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Badge dot status="success">
            <span
              style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }}
            />
          </Badge>
          <span
            style={{
              marginLeft: 12,
              height: '26px',
              lineHeight: '26px',
              display: 'inline-block',
              verticalAlign: 'top'
            }}
          >
            Dot badge Success
          </span>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Badge text={'券1'} overflowCount={121}></Badge>
          <Badge
            text={'NEW'}
            overflowCount={121}
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#21b68a',
              borderRadius: 2
            }}
          ></Badge>
          <Badge
            text="自动缴费"
            style={{
              marginLeft: 12,
              padding: '0 3px',
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#f19736',
              border: '1px solid #f19736'
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col
          span={24}
          style={{
            border: '1px solid #999',
            height: 42,
            overflow: 'hidden'
          }}
        >
          <Badge corner text={'促'} outStyle={{ height: 42, lineHeight: '42px' }}>
            <span
              style={{
                marginLeft: 12,
                display: 'inline-block'
              }}
            >
              Dot badge Success
            </span>
          </Badge>
        </Col>
      </Row>
    </div>
  )
}
