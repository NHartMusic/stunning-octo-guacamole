import React, { Component } from 'react'
import styled from 'styled-components'
import ChartWrapper from './ChartWrapper'
import Nav from './Nav'

const wrapper = styled.div`
  height: 100% !important;
`

class App extends Component {
  
  render() {
    return (
      <wrapper>
        <Nav />
        <ChartWrapper />
      </wrapper>
    );
  }
}

export default App;
