import * as React from 'react'
import ClassNames from 'classnames'
import * as warning from 'warning'
import './style/index.scss'

const noop = () => {}

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  size?: string | number
  type?: string
  prefixCls: string
  className?: string
  color?: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const defaultProps: IconProps = {
  prefixCls: 'cp-ui-icon',
  onClick: noop
}

const handleClick = (e: React.MouseEvent<HTMLElement>, { onClick }: IconProps) => {
  onClick(e)
}

const Icon: React.SFC<IconProps> & { defaultProps: Partial<IconProps> } = props => {
  const { prefixCls, type, size, color, ...rest } = props
  warning(!!type, 'type should be required for icon')
  const classStr = ClassNames(prefixCls, `${prefixCls}-${type}`)
  let style = {
    color
  }
  if (size) {
    ;(style as any).fontSize = size
  }

  return <i className={classStr} style={style} onClick={e => handleClick(e, props)} {...rest} />
}

Icon.defaultProps = defaultProps

export default Icon
