import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      console.log(`${CircleSelector} clicked`)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            handleClick={this.handleClick}
          />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;