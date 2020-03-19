import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import BadgeDemo from '../examples/badge'
import BadgeReadme from '../examples/badge/readme.md'
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
  .add('Badge 徽标数', () => {
    return <BadgeDemo />
  })
