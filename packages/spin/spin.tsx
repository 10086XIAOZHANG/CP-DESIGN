import * as React from 'react'
import ClassNames from 'classnames'
import { SpinProps } from './interface'

import './style/index.scss'

const defaultProps: Partial<SpinProps> = {
  spinning: true,
  size: 'normal',
  fullScreen: false
}

const prefixCls = 'cp-ui-spin'

const getClassNames = ({ size, fullScreen, children }: SpinProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-fullScreen`]: fullScreen,
    [`${prefixCls}-wrapper`]: children
  })
}

const renderIndicator = ({ indicator, color }: SpinProps) => {
  const style: any = {}
  if (color) {
    style.background = color
  }
  return (
    <div className={`${prefixCls}-loading-icon`}>
      {indicator || (
        <div className={`${prefixCls}-default-spin`}>
          <span className="loading-dot" style={style} />
          <span className="loading-dot" style={style} />
          <span className="loading-dot" style={style} />
          <span className="loading-dot" style={style} />
        </div>
      )}
    </div>
  )
}

const renderChildren = ({ children }: SpinProps) => {
  if (children) {
    return <div className={`${prefixCls}-container`}>{children}</div>
  }
  return null
}

const renderComponent = (props: SpinProps) => {
  const { tip } = props
  const classStr = getClassNames(props)
  return (
    <div className={classStr}>
      <div className={`${prefixCls}-loading`}>
        <div className={`${prefixCls}-loading-container`}>
          {renderIndicator(props)}
          {tip ? <div className={`${prefixCls}-loading-text`}>{tip}</div> : null}
        </div>
      </div>
      {renderChildren(props)}
    </div>
  )
}

const Spin: React.FC<SpinProps> = props => {
  // 这里这么写是为了预留fullScreen使用
  return renderComponent(props)
}

Spin.defaultProps = defaultProps

export default Spin
