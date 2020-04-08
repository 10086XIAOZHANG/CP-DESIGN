import React from 'react'
import { storiesOf } from '@storybook/react'

import RadioDemo from '../examples/radio'
import RadioReadme from '../examples/radio/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('General 通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: RadioReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Radio 单选框', () => {
    return <RadioDemo />
  })
