import React, { Component } from 'react'
import styled from 'styled-components'
import ChartWrapper from './ChartWrapper'
import Nav from './Nav'

const Wrapper = styled.div`
  height: 100% !important;
`

const Container = styled.div`
  margin: 20px;
`

class App extends Component {
  
  render() {
    return (
      <Wrapper>
        <Nav />
        <Container>
          <ChartWrapper />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
