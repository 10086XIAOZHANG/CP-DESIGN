import React from 'react'
import { storiesOf } from '@storybook/react'

import ActionSheetDemo from '../examples/actionSheet'
import ActionSheetReadme from '../examples/actionSheet/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('Feedback 反馈', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ActionSheetReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('ActionSheet 动作面板', () => {
    return <ActionSheetDemo />
  })
