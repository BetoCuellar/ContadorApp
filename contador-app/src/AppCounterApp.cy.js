import React from 'react'
import CounterApp from './App'

describe('<CounterApp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CounterApp />)
  })
})