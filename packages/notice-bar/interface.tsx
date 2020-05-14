import * as React from 'react'

export interface NoticeBarPropsType {
  mode?: 'closable' | 'link'
  onClick?: () => void
  icon?: React.ReactElement<any> | null
  action?: React.ReactElement<any>
}
export interface NoticeBarProps extends NoticeBarPropsType {
  marqueeProps?: MarqueeProps
  className?: string
  prefixCls?: string
  style?: React.CSSProperties
}
export interface MarqueeProps {
  prefixCls?: string
  text?: string
  loop?: boolean
  leading?: number
  trailing?: number
  className?: string
  fps?: number
  style?: React.CSSProperties
}
