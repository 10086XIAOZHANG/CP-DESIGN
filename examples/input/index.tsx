import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Button, Row, Col } from '../../src/components'
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
                    errors.title && (
                      <span style={{ color: 'red', paddingLeft: '8rem' }}>This is required.</span>
                    )
                  }
                />
              }
              name="title"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />
          </Col>
        </Row>

        <Row justify={'center'}>
          <Col span={18}>
            <Button htmlType="submit" onClick={handleSubmit(onSubmit)} style={btnStyle}>
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}
