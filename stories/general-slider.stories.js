import React from 'react'
import { storiesOf } from '@storybook/react'

import SliderDemo from '../examples/slider'
import SliderReadme from '../examples/slider/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: SliderReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Slider 滑动输入条', () => {
    return <SliderDemo />
  })
