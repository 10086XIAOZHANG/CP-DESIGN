import React from 'react'
import { storiesOf } from '@storybook/react'

import CheckboxDemo from '../examples/checkbox'
import CheckboxReadme from '../examples/checkbox/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: CheckboxReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Checkbox 复选框', () => {
    return <CheckboxDemo />
  })
