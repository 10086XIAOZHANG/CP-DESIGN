import * as React from 'react'
import ClassNames from 'classnames'
import { StepsProps, StepProps, StatusTypes } from './interface'
import Icon from '../icon'

import './style/index.scss'

interface StepType {
  option: StepProps
  index: number
  current: string | number
}

interface IconType {
  status: StatusTypes
  icon?: React.ReactNode
  index: number
}

const defaultProps: StepsProps = {
  direction: 'horizontal',
  size: 'normal',
  labelPlacement: 'horizontal',
  options: [],
  current: 0
}

const prefixCls = 'cp-ui-steps'

const getClassNames = ({ direction, size, labelPlacement, className }: StepsProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-${direction}`]: direction,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-label-${labelPlacement}`]: labelPlacement
  })
}

const getStatus = (index: number, current: string | number) => {
  const currentCopy = Number(current)
  let status: StatusTypes = 'wait'
  if (index === currentCopy) status = 'process'
  if (index < currentCopy) status = 'finish'
  if (index > currentCopy) status = 'wait'
  return status
}

const renderIcon = ({ icon, index, status }: IconType) => {
  if (icon) {
    return <React.Fragment>{icon}</React.Fragment>
  }
  let activeIcon: any = index
  if (status === 'finish') {
    activeIcon = <Icon type="check" />
  }
  return activeIcon
}

const renderStep = ({ option, index, current }: StepType) => {
  const { status, title, describe, icon } = option
  const newStatus = getStatus(index, current)
  const prefixCls = 'cp-ui-steps-item'
  const classStr = ClassNames(prefixCls, `${prefixCls}-${newStatus}`, {
    [`${prefixCls}-custom`]: !!icon
  })
  return (
    <div className={classStr} key={`${prefixCls}-${index}`}>
      <div className={`${prefixCls}-tail`} />
      <div className={`${prefixCls}-icon`}>
        <span className={`${prefixCls}-icon-text`}>
          {renderIcon({ index, icon, status: status || newStatus })}
        </span>
      </div>
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-content-title`}>{title}</div>
        <div className={`${prefixCls}-content-describe`}>{describe}</div>
      </div>
    </div>
  )
}

const renderSteps = ({ options, current }: StepsProps) => {
  return (
    <React.Fragment>
      {options.map((option, index) => {
        return renderStep({ option, index, current })
      })}
    </React.Fragment>
  )
}

const Steps: React.SFC<StepsProps> & { defaultProps: Partial<StepsProps> } = props => {
  const classStr = getClassNames(props)
  return <div className={classStr}>{renderSteps(props)}</div>
}

Steps.defaultProps = defaultProps

export default Steps
