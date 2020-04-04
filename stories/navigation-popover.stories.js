import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import PopoverDemo from '../examples/popover'
import PopoverReadme from '../examples/popover/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
storiesOf('Navigation 导航', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: PopoverReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Popover 气泡', () => {
    return <PopoverDemo />
  })
