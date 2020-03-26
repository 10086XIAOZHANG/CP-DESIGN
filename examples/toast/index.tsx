import * as React from 'react'
import { Button, Toast, Icon, Row, Col } from '../../src/components'
// import { action } from '@storybook/addon-actions'
export default function ToastDemo() {
  const showToast = () => {
    Toast.info('This is a toast tips !!!', 3)
  }
  const showToastNoMask = () => {
    Toast.info('Toast without mask !!!', 2, undefined, false)
  }
  const customIcon = () => {
    return <Icon type="circle-o-notch" spin size={'3rem'} />
  }
  const successToast = () => {
    Toast.success('Load success !!!', 1)
  }
  const failToast = () => {
    Toast.fail('Load failed !!!', 1)
  }
  const offline = () => {
    Toast.offline('Network connection failed !!!', 1)
  }
  const loadingToast = () => {
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!')
    })
  }
  return (
    <div>
      <h1>Toast 轻提示</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showToast}>text only</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showToastNoMask}>without mask</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={() => Toast.info(customIcon(), 1)}>cumstom icon</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={successToast}>success</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={failToast}>fail</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={offline}>network failure</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={loadingToast}>loading</Button>
        </Col>
      </Row>
    </div>
  )
}
