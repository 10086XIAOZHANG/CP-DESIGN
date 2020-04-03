import React from 'react'
import { storiesOf } from '@storybook/react'

import PickerPanelDemo from '../examples/pickerPanel'
import PickerPanelReadme from '../examples/pickerPanel/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: PickerPanelReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('PickerPanel 选择器', () => {
    return <PickerPanelDemo />
  })
