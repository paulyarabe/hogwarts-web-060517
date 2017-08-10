import React from 'react';
import Pig from './Pig';

class PigBrowser extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let pigs = this.props.indexPigs.map((pig, index) =>
      <Pig key={index} pig={pig} /> )

    return (
      <div className="ui three stackable cards">
        { pigs }
      </div>
    );
  }
}

export default PigBrowser
