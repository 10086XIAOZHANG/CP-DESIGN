import * as React from 'react'
import ClassNames from 'classnames'
import { PaginationProps } from './interface'
import Icon from '../icon'
import Input from '../input'

import './style/index.scss'

type ItemType = 'leftEllipsis' | 'noEllipsis' | 'rightEllipsis'
type Operation = 'add' | 'subtraction'

interface DataType {
  type: ItemType
  value: string | number
}

const { useState } = React

const noop = () => {}
const prefixCls = 'cp-ui-pagination'
const numberReg = /^[0-9]*$/
const STEP = 5

const defaultProps: PaginationProps = {
  current: 1,
  onChange: noop,
  pageSize: 10,
  total: 0,
  showSizeChanger: false,
  showQuickJumper: false,
  onShowSizeChange: noop,
  size: 'medium',
  pageShowCount: 5
}

const getClassNames = ({ showQuickJumper, showSizeChanger, size }: PaginationProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-changer`]: showSizeChanger,
    [`${prefixCls}-jumper`]: showQuickJumper,
    [`${prefixCls}-${size}`]: size
  })
}

const getTotalPages = (total: number, pageSize: number) => {
  const totalPages = Math.ceil(total / pageSize)
  return totalPages <= 0 ? 1 : totalPages
}

const getData = ({ total, current, pageSize, pageShowCount }: PaginationProps) => {
  const pages = getTotalPages(total, pageSize)
  let data: Array<DataType> = []
  if (pages <= pageShowCount) {
    for (let i = 1; i <= pages; i++) {
      data.push({ type: 'noEllipsis', value: i })
    }
  } else {
    const otherCount = pageShowCount - 3
    const halfCount = parseInt(`${otherCount / 2}`, 10)
    let start, end
    data.push({ type: 'noEllipsis', value: 1 })

    start = current - halfCount
    end = current + halfCount

    if (start <= 1) {
      start = 2
      end = start + otherCount
    }

    if (start > 2) {
      data.push({ type: 'leftEllipsis', value: '•••' })
    }
    if (end >= pages - 1) {
      end = pages - 1
      start = pages - 1 - otherCount
    }

    for (let j = start; j <= end; j++) {
      data.push({ type: 'noEllipsis', value: j })
    }

    if (end < pages - 1) {
      data.push({ type: 'rightEllipsis', value: '•••' })
    }

    data.push({ type: 'noEllipsis', value: pages })
  }

  return data
}

const translateValue = (value: number, step: number, operation: Operation, totalPages: number) => {
  if (operation === 'subtraction') {
    return value - step <= 0 ? 1 : value - step
  } else {
    return value + step >= totalPages ? totalPages : value + step
  }
}

const getValue = (type: ItemType, current: number, totalPages: number) => {
  if (type === 'leftEllipsis') {
    return translateValue(current, STEP, 'subtraction', totalPages)
  } else {
    return translateValue(current, STEP, 'add', totalPages)
  }
}

const handlePage = (
  { type, value }: DataType,
  { onChange, current, total, pageSize }: PaginationProps
) => {
  if (type === 'noEllipsis') {
    onChange(value)
  } else {
    const totalPages = getTotalPages(total, pageSize)
    const newValue = getValue(type, current, totalPages)
    onChange(newValue)
  }
}

const jump = (value: number, { onChange }: PaginationProps) => {
  onChange(value)
}

const jumpPre = (props: PaginationProps) => {
  const { current, total, pageSize } = props
  if (current === 1) return
  const totalPages = getTotalPages(total, pageSize)
  const value = translateValue(current, 1, 'subtraction', totalPages)
  jump(value, props)
}

const jumpNext = (props: PaginationProps) => {
  const { current, total, pageSize } = props
  const totalPages = getTotalPages(total, pageSize)
  if (current === totalPages) return
  const value = translateValue(current, 1, 'add', totalPages)
  jump(value, props)
}

const renderData = (props: PaginationProps) => {
  const { current } = props
  const dataSources = getData(props)
  return (
    <>
      {dataSources.map((record, index) => {
        const classStr = ClassNames(`${prefixCls}-item`, {
          [`${prefixCls}-${record.type}`]: record.type,
          [`${prefixCls}-item-active`]: current === record.value
        })
        return (
          <li className={classStr} key={`page-${index}`} onClick={() => handlePage(record, props)}>
            {record.value}
          </li>
        )
      })}
    </>
  )
}

const renderPaginationOptions = ({
  showSizeChanger,
  showQuickJumper,
  onChange,
  total,
  pageSize,
  current
}: PaginationProps) => {
  const [value, setValue] = useState('')
  const totalPages = getTotalPages(total, pageSize)

  const handleChange = (value: string) => {
    setValue(value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    /** 对enter按键进行处理 */
    if (e.keyCode === 13) {
      const targetValue = Number(value)
      if (
        numberReg.test(value) &&
        targetValue >= 1 &&
        targetValue <= totalPages &&
        targetValue !== current
      ) {
        onChange(targetValue)
      }
      setValue('')
    }
  }

  if (showQuickJumper || showSizeChanger) {
    return (
      <>
        <li className={`${prefixCls}-option`}>
          {showSizeChanger ? <div className={`${prefixCls}-size-changer`}>select组件</div> : null}
          {showQuickJumper ? (
            <div className={`${prefixCls}-quick-jump`}>
              跳至
              <Input value={value} onChange={handleChange} onKeyDown={handleKeyPress} />页
            </div>
          ) : null}
        </li>
      </>
    )
  }
  return null
}

const Pagination: React.SFC<PaginationProps> & {
  defaultProps: Partial<PaginationProps>
} = props => {
  const classStr = getClassNames(props)
  const { preStep, nextStep, current, total, pageSize } = props
  const totalPages = getTotalPages(total, pageSize)
  const preClass = ClassNames(`${prefixCls}-pre`, `${prefixCls}-item`, {
    [`${prefixCls}-pre-disabled`]: current === 1
  })
  const nextClass = ClassNames(`${prefixCls}-next`, `${prefixCls}-item`, {
    [`${prefixCls}-next-disabled`]: current === totalPages
  })
  return (
    <div className={classStr}>
      <ul className={`${prefixCls}-wrap`}>
        <li className={preClass} onClick={() => jumpPre(props)}>
          <a>{preStep || <Icon type="left" />}</a>
        </li>
        {renderData(props)}
        <li className={nextClass} onClick={() => jumpNext(props)}>
          <a>{nextStep || <Icon type="right" />}</a>
        </li>
        {renderPaginationOptions(props)}
      </ul>
    </div>
  )
}

Pagination.defaultProps = defaultProps

export default Pagination
