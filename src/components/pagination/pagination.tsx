import * as React from 'react'
import ClassNames from 'classnames'
import { PaginationProps } from './interface'
import Icon from '../icon'
import { Row, Col } from '../grid'
import './style'

type Operation = 'add' | 'subtraction'

const noop = () => {}
const prefixCls = 'cp-ui-pagination'

interface DataType {
  value: string | number
}
const defaultProps: PaginationProps = {
  current: 1,
  onChange: noop,
  pageSize: 10,
  total: 0,
  size: 'medium'
}

const getClassNames = ({ size }: PaginationProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-${size}`]: size
  })
}

const getTotalPages = (total: number, pageSize: number) => {
  const totalPages = Math.ceil(total / pageSize)
  return totalPages <= 0 ? 1 : totalPages
}

const translateValue = (value: number, step: number, operation: Operation, totalPages: number) => {
  if (operation === 'subtraction') {
    return value - step <= 0 ? 1 : value - step
  } else {
    return value + step >= totalPages ? totalPages : value + step
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
/**
 * 中间部分
 * @param props
 */
const renderSimpleData = (props: PaginationProps) => {
  const { total, current, pageSize, mode } = props
  const pages = getTotalPages(total, pageSize)
  const classStr = ClassNames(`${prefixCls}-item`)
  if (mode === 'pointer') {
    return <div className={classStr}></div>
  }
  return (
    <div className={classStr}>
      <span className={`${prefixCls}-num`}>{current}</span>/{pages}
    </div>
  )
}
const handlePage = ({ value }: DataType, { onChange }: PaginationProps) => {
  onChange(value)
}
const getPointerContentData = ({ total, pageSize }: PaginationProps) => {
  const pages = getTotalPages(total, pageSize)
  let data: Array<DataType> = []
  for (let i = 1; i <= pages; i++) {
    data.push({ value: i })
  }

  return data
}
const renderPointerContainerData = (props: PaginationProps) => {
  const { current } = props
  const dataSources = getPointerContentData(props)
  return (
    <>
      {dataSources.map((record, index) => {
        const classStr = ClassNames(`${prefixCls}-item `, `${prefixCls}-noEllipsis`, {
          [`${prefixCls}-item-active`]: current === record.value
        })
        return (
          <li className={classStr} key={`page-${index}`} onClick={() => handlePage(record, props)}>
            <span className={`${prefixCls}-pointer-span`}></span>
          </li>
        )
      })}
    </>
  )
}

/**
 * mode 为pointer下状态
 * @param props
 */
const renderPointerData = (props: PaginationProps) => {
  return <ul className={`${prefixCls}-wrap `}>{renderPointerContainerData(props)}</ul>
}
const Pagination: React.SFC<PaginationProps> & {
  defaultProps: Partial<PaginationProps>
} = props => {
  const classStr = getClassNames(props)
  const { preStep, nextStep, current, total, pageSize, simple, mode } = props
  const totalPages = getTotalPages(total, pageSize)
  const preClass = ClassNames(`${prefixCls}-pre`, `${prefixCls}-item`, {
    [`${prefixCls}-pre-disabled`]: current === 1
  })
  const nextClass = ClassNames(`${prefixCls}-next`, `${prefixCls}-item`, {
    [`${prefixCls}-next-disabled`]: current === totalPages
  })
  return (
    <div className={classStr}>
      <div className={`${prefixCls}-wrap`}>
        {mode === 'pointer' ? (
          <Row justify={'center'}>
            <Col>{renderPointerData(props)}</Col>
          </Row>
        ) : (
          <Row justify={'space-between'}>
            <Col>
              <a
                onClick={() => {
                  jumpPre(props)
                }}
                className={preClass}
              >
                {preStep || <Icon type="angle-left" />}
              </a>
            </Col>
            {!simple && <Col> {renderSimpleData(props)}</Col>}
            <Col>
              <a
                onClick={() => {
                  jumpNext(props)
                }}
                className={nextClass}
              >
                {nextStep || <Icon type="angle-right" />}
              </a>
            </Col>
          </Row>
        )}
      </div>
    </div>
  )
}

Pagination.defaultProps = defaultProps

export default Pagination
