import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import PigBrowser from './components/PigBrowser';
import { getAll } from './porkers_data'
import Filter from './components/Filter'

const allPigs = getAll()

function sortbyname(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
    return 0;
  }

function sortbyweight(a,b) {
  if (a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] < b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
    return -1;
  if (a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] > b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
    return 1;
    return 0;
  }

class App extends Component {
  constructor(){
    super();

    this.state = {
      pigs: allPigs,
      arranged_by: "all"
    }
  }

  arrange = (arg) => {
    this.setState({
      arranged_by: arg
    })
  }

  newPigArr = () =>{

    let displayPigs = null
    let arrangingPigs = [...this.state.pigs]
    if(this.state.arranged_by === "name"){
      displayPigs = arrangingPigs.sort(sortbyname)
    } else if (this.state.arranged_by === "weight") {
      displayPigs = arrangingPigs.sort(sortbyweight)
    } else if (this.state.arranged_by === "filter") {
      displayPigs = arrangingPigs.filter(e => e.greased === true) } else {
      displayPigs =  this.state.pigs
    }

    return displayPigs
  }

  render() {
    let displayPigs = this.newPigArr()

    return (
      <div className="App">
        < Nav />
        < Filter filter={this.arrange}/>
        < PigBrowser indexPigs={displayPigs} />

      </div>
    )
  }
}

export default App;
