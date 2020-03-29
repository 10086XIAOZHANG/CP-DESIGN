import * as React from 'react'
import { ActionSheet, Button, Badge, Row, Col } from '../../src/components'

export default function ActionSheetDemo() {
  const showActionSheet = () => {
    ActionSheet.showActionSheetWithOptions({
      actions: [
        {
          key: '1',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '2',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '3',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '4',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        }
      ]
    })
  }
  const onClickNoCloseModal = () => {
    ActionSheet.showActionSheetWithOptions({
      cancelText: '关闭',
      closeOnClickModal: false,
      actions: [
        {
          key: '1',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '2',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '3',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '4',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        }
      ],
      onCancel: () => {}
    })
  }
  const showActionSheetBadge = () => {
    ActionSheet.showActionSheetWithOptions({
      actions: [
        {
          key: '1',
          content: (
            <div>
              <span>Operation1</span> <Badge text={'券1'} overflowCount={121}></Badge>
            </div>
          ),
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '2',
          content: (
            <div>
              <span>Operation1</span> <Badge text={100} overflowCount={99}></Badge>
            </div>
          ),
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '3',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        },
        {
          key: '4',
          content: 'Operation1',
          //action 点击
          onClick: (key: string) => {
            console.log(key)
          }
        }
      ],
      onCancel: () => {}
    })
  }
  return (
    <div>
      <h1>ActionSheet 动作面板</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showActionSheet}>showActionSheet</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={onClickNoCloseModal}>onClickNoCloseModal</Button>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Button onClick={showActionSheetBadge}>showActionSheetBadge</Button>
        </Col>
      </Row>
    </div>
  )
}
