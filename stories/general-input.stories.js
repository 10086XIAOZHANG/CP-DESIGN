import React from 'react'
import { storiesOf } from '@storybook/react'

import InputDemo from '../examples/input'
import InputReadme from '../examples/input/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: InputReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Input 输入框', () => {
    return <InputDemo />
  })
