import React from 'react'
import { storiesOf } from '@storybook/react'

import ImagePickerDemo from '../examples/imagePicker'
import ImagePickerReadme from '../examples/imagePicker/readme.md'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

// Globablly

storiesOf('General 通用', module)
  .addDecorator(story => <div style={{ marginTop: '10px' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ImagePickerReadme,
      codeTheme: 'github'
    },
    viewport: { defaultViewport: 'iphone6' }
  })
  .add('ImagePicker 上传', () => {
    return <ImagePickerDemo />
  })
