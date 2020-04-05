import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import IconDemo from '../examples/icon'
import IconReadme from '../examples/icon/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('Data Display 数据显示', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: IconReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Icon 图标', () => {
    return <IconDemo />
  })
