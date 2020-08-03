import React from 'react'
import ReactDOM from 'react-dom'
import Measurement from './measurement'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Measurement />, div)
  ReactDOM.unmountComponentAtNode(div)
})
