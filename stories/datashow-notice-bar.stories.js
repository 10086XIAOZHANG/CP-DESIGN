import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import NoticeBarDemo from '../examples/noticeBar'
import NoticeBarReadme from '../examples/noticeBar/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('Data Display 数据显示', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: NoticeBarReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('NoticeBar 通告栏', () => {
    return <NoticeBarDemo />
  })
