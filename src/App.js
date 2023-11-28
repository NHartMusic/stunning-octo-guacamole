import React, { Component } from 'react'
import styled from 'styled-components'
import ChartWrapper from './ChartWrapper'
import Nav from './Nav'

const Wrapper = styled.div`
  height: 100% !important;
`

class App extends Component {
  
  render() {
    return (
      <Wrapper>
        <Nav />
        <ChartWrapper />
      </Wrapper>
    );
  }
}

export default App;
