import * as React from 'react'

const { createContext } = React

export interface RowContextProps {
  gutter?: number | object
}

const RowContext: React.Context<RowContextProps> = createContext({})

export default RowContext
