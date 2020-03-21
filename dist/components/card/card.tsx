import * as React from 'react'
import ClassNames from 'classnames'
import { CardProps } from './interface'

import './style/index.scss'

const noop = () => {}

const defaultProps: CardProps = {
  actions: [],
  prefixCls: 'cp-ui-card',
  onExtraClick: noop
}

const renderActions = ({ actions, prefixCls }: CardProps) => {
  if (actions && actions.length) {
    return (
      <div className={`${prefixCls}-actions`}>
        {actions.map((action, index) => {
          return (
            <div
              className={`${prefixCls}-actions-item`}
              onClick={action.onClick}
              key={`action-${index}`}
            >
              {action.content}
            </div>
          )
        })}
      </div>
    )
  }
  return null
}

const Card: React.SFC<CardProps> & { defaultProps: Partial<CardProps> } = props => {
  const { prefixCls, title, extra, children, className, style, onExtraClick } = props
  const classStr = ClassNames(prefixCls, className)
  let styleCopy = style || {}
  return (
    <div className={classStr} style={styleCopy}>
      {title ? (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{title}</div>
          {extra ? (
            <div className={`${prefixCls}-extra`} onClick={onExtraClick}>
              {extra}
            </div>
          ) : null}
        </div>
      ) : null}
      {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
      {renderActions(props)}
    </div>
  )
}

Card.defaultProps = defaultProps

export default Card
