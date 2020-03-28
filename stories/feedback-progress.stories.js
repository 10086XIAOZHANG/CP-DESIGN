import React from 'react'
import { storiesOf } from '@storybook/react'

import ProgressDemo from '../examples/progress'
import ProgressReadme from '../examples/progress/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('Feedback 反馈', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ProgressReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Progress 进度条', () => {
    return <ProgressDemo />
  })
