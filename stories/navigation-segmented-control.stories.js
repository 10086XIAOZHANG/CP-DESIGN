import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import SegmentedControlDemo from '../examples/segmentedControl'
import SegmentedControlReadme from '../examples/segmentedControl/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
storiesOf('Navigation 导航', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: SegmentedControlReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('SegmentedControl 分段器', () => {
    return <SegmentedControlDemo />
  })
