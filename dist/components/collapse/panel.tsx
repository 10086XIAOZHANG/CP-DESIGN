import * as React from 'react'
import ClassNames from 'classnames'
import { PanelProps } from './interface'
import Icon from '../icon'

interface ClickProps {
  props: PanelProps
  expanded: boolean
}

const noop = () => {}

const defaultProps: PanelProps = {
  disabled: false,
  expanded: false,
  prefixCls: 'cp-ui-panel',
  onChange: noop
}

const handleClick = ({ props, expanded }: ClickProps) => {
  const { onChange, disabled } = props
  if (disabled) return
  onChange(!expanded)
}

const renderIcon = ({ icon }: PanelProps) => {
  if (icon) {
    return icon
  }
  return <Icon type="right" />
}

const renderTitleContent = ({ title, prefixCls }: PanelProps) => {
  if (title) {
    return <div className={`${prefixCls}-title-content`}>{title}</div>
  }
  return null
}

const renderContent = ({ content, prefixCls }: PanelProps, visible: boolean) => {
  if (content) {
    const classStr = ClassNames(`${prefixCls}-body`, {
      [`${prefixCls}-body-active`]: visible,
      [`${prefixCls}-body-inactive`]: !visible
    })
    return <div className={classStr}>{content}</div>
  }
  return null
}

const Panel: React.SFC<PanelProps> & { defaultProps: Partial<PanelProps> } = props => {
  const { prefixCls, title, expanded, disabled } = props
  const classStr = ClassNames(prefixCls, {
    [`${prefixCls}-expanded`]: expanded,
    [`${prefixCls}-disabled`]: disabled
  })
  return (
    <div className={classStr}>
      {title ? (
        <div className={`${prefixCls}-title`} onClick={() => handleClick({ props, expanded })}>
          <div className={`${prefixCls}-icon`}>{renderIcon(props)}</div>
          {renderTitleContent(props)}
        </div>
      ) : null}
      {renderContent(props, expanded)}
    </div>
  )
}

Panel.defaultProps = defaultProps

export default Panel
