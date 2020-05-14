import * as React from 'react'
import ClassNames from 'classnames'
import { PanelProps } from './interface'
import Icon from '../icon'

interface ClickProps {
  props: PanelProps
  defaultExpanded: boolean
}
const noop = () => {}

const defaultProps: PanelProps = {
  disabled: false,
  defaultExpanded: false,
  prefixCls: 'cp-ui-panel',
  onChange: noop
}

const handleClick = ({ props, defaultExpanded }: ClickProps) => {
  const { onChange, disabled } = props
  if (disabled) return

  onChange(!defaultExpanded)
}

const renderIcon = ({ icon }: PanelProps) => {
  if (icon) {
    return icon
  }
  return null
}
const renderRightIcon = ({ rightOpenIcon, rightCloseIcon }: PanelProps, visible: boolean) => {
  const isShowCustomIcon = !!rightOpenIcon && !!rightCloseIcon
  if (visible) {
    if (isShowCustomIcon) {
      return rightOpenIcon
    } else {
      return <Icon type={'angle-up'} />
    }
  } else {
    if (isShowCustomIcon) {
      return rightCloseIcon
    } else {
      return <Icon type={'angle-down'} />
    }
  }
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

const Panel: React.FC<PanelProps> & { defaultProps: Partial<PanelProps> } = props => {
  const { prefixCls, title, defaultExpanded, disabled } = props
  const classStr = ClassNames(prefixCls, {
    [`${prefixCls}-expanded`]: defaultExpanded,
    [`${prefixCls}-disabled`]: disabled
  })
  return (
    <div className={classStr}>
      {title ? (
        <div
          className={`${prefixCls}-title`}
          style={defaultExpanded ? { borderBottom: '1px solid #d9d9d9' } : {}}
          onClick={() => handleClick({ props, defaultExpanded })}
        >
          <div className={`${prefixCls}-icon`}>{renderIcon(props)}</div>
          {renderTitleContent(props)}
          <div className={`${prefixCls}-right-icon`}>{renderRightIcon(props, defaultExpanded)}</div>
        </div>
      ) : null}
      {renderContent(props, defaultExpanded)}
    </div>
  )
}

Panel.defaultProps = defaultProps

export default Panel
