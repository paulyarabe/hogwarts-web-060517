import React from 'react';

class Pig extends React.Component {

  constructor(){
    super()

    this.state = {
      visible: false
    }
  }

  handleClick = (e) => {
    if (this.state.visible){
      this.setState({ visible: false })
    } else {
      this.setState({ visible: true })
    }
  }

  render() {
    var details = null;
    if(this.state.visible){
      details = <div>
        <p>{this.props.pig.specialty} | {this.props.pig.greased === true ? "greased" : "not greased"} | {this.props.pig["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} | {this.props.pig["highest medal achieved"]}</p>
      </div>
    }

    return (
      <div className="card">
        <div className="image">
          <img src={this.props.pig.url}/>
          <p onClick={this.handleClick}>{this.props.pig.name}</p>
          { details }
        </div>
      </div>
    );
  }

}

export default Pig
