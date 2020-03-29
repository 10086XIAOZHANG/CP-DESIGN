import * as React from 'react'
import { Tabs, Row, Col, Badge } from '../../src/components'
const { useState } = React
export default function TabsDemo() {
  const [activeKey, setActiveKey] = useState('1')
  const [activeBottomKey, setActiveBottomKey] = useState('1')
  const [activeLeftKey, setActiveLeftKey] = useState('1')
  const handleChange = (key: string) => {
    setActiveKey(key)
  }
  const handleChange1 = (key: string) => {
    setActiveBottomKey(key)
  }

  const handleChange2 = (key: string) => {
    setActiveLeftKey(key)
  }
  const options1 = [
    {
      key: '1',
      tab: 'Tab 1',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of first tab
        </div>
      )
    },
    {
      key: '2',
      tab: 'Tab 2',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of second tab
        </div>
      )
    },
    {
      key: '3',
      tab: 'Tab 3',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of third tab
        </div>
      )
    }
  ]
  const options = [
    {
      key: '1',
      tab: (
        <Badge text={3} status="success">
          <span style={{ paddingRight: '10px' }}>First Tab</span>
        </Badge>
      ),
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of first tab
        </div>
      )
    },
    {
      key: '2',
      tab: 'Second Tab',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of second tab
        </div>
      )
    },
    {
      key: '3',
      tab: 'Third Tab',
      content: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: 'rgba(210, 209, 209, 0.27)'
          }}
        >
          Content of third tab
        </div>
      )
    }
  ]
  return (
    <div>
      <h1>Tabs 标签页</h1>
      <h3>基本用法</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tabs activeKey={activeKey} onChange={handleChange} options={options} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tabs
            tabPosition={'bottom'}
            activeKey={activeBottomKey}
            onChange={handleChange1}
            options={options}
          />
        </Col>
      </Row>
      <h4>垂直样式</h4>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Tabs
            tabPosition={'left'}
            activeKey={activeLeftKey}
            onChange={handleChange2}
            options={options1}
          />
        </Col>
      </Row>
    </div>
  )
}
