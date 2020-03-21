import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import IntroduceDemo from '../examples/introduce'

storiesOf('OVERVIEW 总览', module).add('Introduce 介绍', () => {
  return <IntroduceDemo />
})
