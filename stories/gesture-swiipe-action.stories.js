import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import SwipeActionDemo from '../examples/swipeAction'
import SwipeActionReadme from '../examples/swipeAction/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('Gesture 手势', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: SwipeActionReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('SwipeAction 滑动操作', () => {
    return <SwipeActionDemo />
  })
