import piggy from '../porco.png';
import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
          <div className="TwirlyPig">
            <img src={piggy} className="App-logo" alt="piggy" />
          </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>

      </div>
    )
  }
}

export default Nav
