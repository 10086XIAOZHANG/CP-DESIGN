import React from 'react'
import { storiesOf } from '@storybook/react'

import ModalDemo from '../examples/modal'
import ModalReadme from '../examples/modal/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('Feedback 反馈', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ModalReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('Modal 对话框', () => {
    return <ModalDemo />
  })
