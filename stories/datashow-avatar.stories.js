import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import AvatarDemo from '../examples/avatar'
import AvatarReadme from '../examples/avatar/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('数据显示', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: AvatarReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Avatar头像', () => {
    return <AvatarDemo />
  })
