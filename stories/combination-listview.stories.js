import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import ListViewDemo from '../examples/listview'
import ListViewReadme from '../examples/listview/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

storiesOf('Combination 结合', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ListViewReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('ListView 长列表', () => {
    return <ListViewDemo />
  })
