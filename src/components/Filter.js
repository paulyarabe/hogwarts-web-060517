import React from 'react';
import Nav from './Nav'

class Filter extends React.Component {
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
          <option selected value="default">Original Pigs</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="filter">Filter</option>
        </select>
      </span>
    </div>
    )
  }
}

export default Filter
