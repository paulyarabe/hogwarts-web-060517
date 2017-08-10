import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import PigBrowser from './components/PigBrowser';
import { getAll } from './porkers_data'

const piggies = getAll()

class App extends Component {

  constructor(){
    super();

    this.state = {
      pigs: piggies
    }

  }


  render() {

    return (
      <div className="App">
        < Nav />
      < PigBrowser indexPigs={this.state.pigs} />

      </div>
    )
  }
}

export default App;
