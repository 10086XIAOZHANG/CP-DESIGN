import React from 'react'
import { storiesOf } from '@storybook/react'

import PickerDemo from '../examples/picker'
import PickerReadme from '../examples/picker/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: PickerReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Picker 选择器', () => {
    return <PickerDemo />
  })
