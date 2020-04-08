import React from 'react'
import { storiesOf } from '@storybook/react'

import SwitchDemo from '../examples/switch'
import SwitchReadme from '../examples/switch/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('General 通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: SwitchReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Switch 滑动开关', () => {
    return <SwitchDemo />
  })
