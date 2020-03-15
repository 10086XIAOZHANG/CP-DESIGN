import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonDemo from '../examples/button'
import ButtonReadme from '../examples/button/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ButtonReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Button按钮', () => {
    return <ButtonDemo />
  })
