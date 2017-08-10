import React from 'react';

class Pig extends React.Component {


  render() {
    return (
      <div>
        <p>{this.props.pig.name}</p>
        <p>{this.props.pig.specialty}</p>
        <p>{this.props.pig.greased === true ? "greased" : "not greased"}</p>
        <p>{this.props.pig.weight}</p>
        <p>{this.props.pig.medal}</p>
      </div>
    );
  }

}

export default Pig
