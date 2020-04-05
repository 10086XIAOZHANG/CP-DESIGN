import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import CardDemo from '../examples/card'
import CardReadme from '../examples/card/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('Data Display 数据显示', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: CardReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Card 卡片', () => {
    return <CardDemo />
  })
