import React, { Component } from 'react'
import ChartWrapper from './ChartWrapper'
import Nav from './Nav'

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Nav />
        <ChartWrapper />
      </div>
    );
  }
}

export default App;
