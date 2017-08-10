import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import PigBrowser from './components/PigBrowser';

class App extends Component {

  constructor(){
    super();

    this.state = {
      pigs: [{
        name: "Leggo my eggo",
        specialty: "babysitting",
        greased: true,
        weight: 130.22,
        medal: "platinum"
      }]
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
