import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import TabsDemo from '../examples/tabs'
import TabsReadme from '../examples/tabs/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
storiesOf('导航', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: TabsReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Tabs 标签页', () => {
    return <TabsDemo />
  })
