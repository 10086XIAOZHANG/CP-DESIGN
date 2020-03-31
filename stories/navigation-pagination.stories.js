import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import PaginationDemo from '../examples/pagination'
import PaginationReadme from '../examples/pagination/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
storiesOf('Navigation 导航', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: PaginationReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Pagination 分页器', () => {
    return <PaginationDemo />
  })
