import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame } from '../actions';

class StartScreen extends Component {
  render() {
    return (
      <div className="ControlsContainer">
      	Welcome to the Dungeon
      	<button onClick={this.props.startGame} >Start Game</button>
      </div>
    );
  }
}

const mapActionsToProps = { startGame };

export default connect(null, mapActionsToProps)(StartScreen);
