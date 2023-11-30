import React, { Component } from 'react'
import styled from 'styled-components'
import ChartWrapper from './ChartWrapper'
import Nav from './Nav'
import Selector from './Selector'

const Wrapper = styled.div`
  height: 100% !important;
  display: flex;
  margin: 0 auto;
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
`

class App extends Component {
  
  render() {
    return (
      <>
      <Nav />
      <Selector />
      <Wrapper>
        <Container>
          <ChartWrapper />
        </Container>
      </Wrapper>
      </>
    );
  }
}

export default App;
