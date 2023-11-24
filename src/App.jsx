import Test from './Test'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    personClicks: 0
  }

  personClicked = () => {
    this.setState({ personClicks: this.state.personClicks + 1 })
  }
 
  render() {
    return (

      <div>
        <Test person='Steve' personClicked={this.personClicked} />
        <Test person='Jan' personClicked={this.personClicked} />
        <Test person='Wayne' personClicked={this.personClicked} />
        <p>Person Clicks: {this.state.personClicks}</p>
      </div>

    )
  }
}

export default App
