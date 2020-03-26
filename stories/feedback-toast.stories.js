import React from 'react'
import { storiesOf } from '@storybook/react'

import ToastDemo from '../examples/toast'
import ToastReadme from '../examples/toast/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('Feedback 反馈', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ToastReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Toast 轻提示', () => {
    return <ToastDemo />
  })
