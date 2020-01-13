import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App>', () => {
  test('render App component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })
})
