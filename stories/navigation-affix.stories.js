import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import AffixDemo from '../examples/affix'
import AffixReadme from '../examples/affix/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
storiesOf('导航', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: AffixReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Affix固钉', () => {
    return <AffixDemo />
  })
