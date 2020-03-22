import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import DividerDemo from '../examples/divider'
import DividerReadme from '../examples/divider/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('数据显示', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: DividerReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Divider 分割线', () => {
    return <DividerDemo />
  })
