import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import TabBarDemo from '../examples/tabBar'
import TabBarReadme from '../examples/tabBar/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
storiesOf('Navigation 导航', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: TabBarReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('TabBar 标签栏', () => {
    return <TabBarDemo />
  })
