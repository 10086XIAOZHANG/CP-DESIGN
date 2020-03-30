import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import BadgeDemo from '../examples/tag'
import BadgeReadme from '../examples/tag/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('数据显示', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: BadgeReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Tag 标签', () => {
    return <BadgeDemo />
  })
