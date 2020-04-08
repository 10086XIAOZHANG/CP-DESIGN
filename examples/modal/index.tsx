import * as React from 'react'
import { Modal, Button, Row, Col } from '../../src/components'
const { useState } = React
export default function ModalDemo() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const showModal1 = (e: React.MouseEvent) => {
    e.preventDefault()
    setModal1(true)
  }
  const showModal2 = (e: React.MouseEvent) => {
    e.preventDefault()
    setModal2(true)
  }
  return (
    <div>
      <Modal
        visible={modal1}
        title="Title1"
        closable={false}
        cancelText={null}
        onOk={() => {
          setModal1(false)
        }}
      >
        <div style={{ height: 100, overflowY: 'scroll', scrollbarWidth: 'none' }}>
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
        </div>
      </Modal>
      <Modal
        visible={modal2}
        title="Title2"
        closable={false}
        onCancel={() => {
          setModal2(false)
        }}
        onOk={() => {
          alert('afterOK')
          setModal2(false)
        }}
      >
        <div style={{ height: 100, overflowY: 'scroll', scrollbarWidth: 'none' }}>
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
          scoll content...
          <br />
        </div>
      </Modal>
      <h1>Modal 对话框</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showModal1}>basic</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showModal2}>confirm</Button>
        </Col>
      </Row>
    </div>
  )
}
