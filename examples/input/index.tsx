import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Button, Icon, Row, Col } from '../../src/components'
const { useRef } = React
export default function ButtonDemo() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { handleSubmit, control, errors } = useForm() // initialise the hook
  const onSubmit = (data: any) => {
    console.log(data)
  }
  const getInputRef = (ele: HTMLInputElement) => {
    inputRef.current = ele
  }
  const handleFocus = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!!inputRef.current) inputRef.current.focus()
  }
  const btnStyle = {
    background: 'linear-gradient(316deg, #f75cff 0%, rgb(236, 9, 51) 100%)',
    opacity: 0.5,
    display: 'block',
    margin: '0 auto',
    height: '2.8rem',
    borderRadius: '0.6rem',
    textAlign: 'center',
    lineHeight: '2.8rem',
    fontSize: '0.88rem',
    color: '#fff'
  }
  return (
    <div>
      <h1>Input 输入框</h1>
      <h3>基本</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>标题</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  placeholder="auto focus"
                  style={{ height: '2.5rem' }}
                  error={errors.title0 && <span style={{ color: 'red' }}>This is required.</span>}
                />
              }
              name="title0"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>标题</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  addonBefore={
                    <div
                      style={{
                        width: '100%',
                        color: 'rgb(16, 142, 233)',
                        textAlign: 'center',
                        float: 'right',
                        height: '2.33rem'
                      }}
                      onClick={handleFocus}
                    >
                      click to focus
                    </div>
                  }
                  getInputRef={getInputRef}
                  placeholder="auto focus"
                  style={{ height: '2.5rem' }}
                  error={
                    errors.title1 && (
                      <span style={{ color: 'red', paddingLeft: '8rem' }}>This is required.</span>
                    )
                  }
                />
              }
              name="title1"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>自定义前缀</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  prefix={<Icon type={'user'} style={{ lineHeight: '2.5rem' }} />}
                  placeholder="auto focus"
                  style={{ height: '2.5rem' }}
                  error={
                    errors.title2 && (
                      <span style={{ color: 'red', paddingLeft: '1rem' }}>This is required.</span>
                    )
                  }
                />
              }
              name="title2"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>自定义内部前缀</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  inlinePrefix={<Icon type={'user'} style={{ lineHeight: '2.5rem' }} />}
                  placeholder="auto focus"
                  style={{ height: '2.5rem' }}
                  error={
                    errors.title3 && (
                      <span style={{ color: 'red', paddingLeft: '1.4rem' }}>This is required.</span>
                    )
                  }
                />
              }
              name="title3"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>价格</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  inlineSuffix={<Icon type={'cny'} style={{ lineHeight: '2.5rem' }} />}
                  placeholder="0.00"
                  style={{ height: '2.5rem' }}
                  error={
                    errors.title4 && (
                      <span style={{ color: 'red', paddingLeft: '1.4rem' }}>This is required.</span>
                    )
                  }
                />
              }
              name="title4"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <h3>Format</h3>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>银行卡</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  type="bankCard"
                  placeholder="请输入银行卡"
                  style={{ height: '2.5rem' }}
                  error={errors.bankCard && <span style={{ color: 'red' }}>This is required.</span>}
                />
              }
              name="bankCard"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>手机号码</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  type="mobile"
                  placeholder="请输入手机号码"
                  style={{ height: '2.5rem' }}
                  error={errors.mobile && <span style={{ color: 'red' }}>This is required.</span>}
                />
              }
              name="mobile"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>密码</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  type="password"
                  placeholder="请输入密码"
                  style={{ height: '2.5rem' }}
                  error={errors.password && <span style={{ color: 'red' }}>This is required.</span>}
                />
              }
              name="password"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <div style={{ color: '#777575', marginBottom: '0.01rem' }}>数字键盘</div>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={
                <Input
                  clear
                  type="number"
                  placeholder="数字键盘"
                  style={{ height: '2.5rem' }}
                  error={errors.number && <span style={{ color: 'red' }}>This is required.</span>}
                />
              }
              name="number"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <h3>禁用</h3>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Controller
              as={<Input clear disabled placeholder="不能输入" style={{ height: '2.5rem' }} />}
              name="number"
              control={control}
              rules={{ required: true }}
            />
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={18}>
            <Button onClick={handleSubmit(onSubmit)} style={btnStyle}>
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}
