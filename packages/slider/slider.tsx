import * as React from 'react'
import RcSlider from 'rc-slider'
import { SliderPropsType } from './interface'
import { omit } from '../utils'

import './style'

const defaultProps: SliderPropsType = {
  prefixCls: 'cp-ui-slider'
}

const omitProps = (props: SliderPropsType) => {
  const excludeProps = ['prefixCls']
  return omit(props, excludeProps)
}
const Slider: React.FC<SliderPropsType> & { defaultProps: Partial<SliderPropsType> } = props => {
  const { prefixCls } = props
  const otherProps = omitProps(props)
  console.log(otherProps)
  return (
    <div className={`${prefixCls}`}>
      <RcSlider {...otherProps} />
    </div>
  )
}
Slider.defaultProps = defaultProps

export default Slider
