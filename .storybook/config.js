import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { addReadme } from 'storybook-readme'
import theme from './theme'
import { configureReadme } from 'storybook-readme'
// import 'babel-polyfill'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// Load all files in the stories folder with a .js extension
const req = require.context('../stories/', true, /.js$/)

function loadStories() {
  req('./introduce.stories.js')
  req.keys().forEach(filename => {
    console.log(filename)
    if (filename.indexOf('introduce') === -1) {
      return req(filename)
    }
  })
}
configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  StoryPreview: ({ children }) => <div>{children}</div>,

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => <div style={{ background: '#000' }}> {children}</div>,

  /**
   * Wrapper for hedaer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  HeaderPreview: ({ children }) => <div style={{ background: 'red' }}>{children}</div>,

  /**
   * Wrapper for footer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  FooterPreview: ({ children }) => <div>{children}</div>,

  /**
   * Header docs in markdown format
   */
  header: '',

  /**
   * Footer docs in markdown format
   */
  footer: ''
})
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  readme: {
    codeTheme: 'github'
  },
  options: {
    theme: theme,
    // isFullscreen: false,
    panelPosition: 'right'
  }
})

addDecorator(story => <div style={{ padding: 20 }}>{story()}</div>)
addDecorator(addReadme)
configure(loadStories, module)
