import React from 'react'
import { storiesOf } from '@storybook/react'

import GridDemo from '../examples/grid'
import AvatarReadme from '../examples/grid/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
// Globablly
import './index.scss'
storiesOf('General 通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: AvatarReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Grid 布局', () => {
    return <GridDemo />
  })
