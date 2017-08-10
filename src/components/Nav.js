import piggy from '../porco.png';
import React from 'react';
import Filter from './Filter'

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  handleSelect = (e) =>
   this.props.filter(e.target.value)

  render(){
    return (
      <div className="navWrapper">
        <span>
            <select onChange={this.handleSelect} className="type" id="type" className="ui selection dropdown">
          {/* <i className="dropdown icon"></i> */}
          <option selected value="default">Original Pigs</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="filter">Filter</option>
        </select>
      </span>
    <span
        className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  )
}

}

export default Nav
