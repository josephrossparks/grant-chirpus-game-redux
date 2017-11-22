import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startGame } from '../actions';

class Controls extends Component {
  render() {
    return (
      <div className="ControlsContainer">
      	<button>Attack</button>
      	<button>Heal</button>
      	<button onClick={this.props.startGame}>Flee</button>
      </div>
    );
  }
}

const mapActionsToProps = { startGame };

export default connect(null , mapActionsToProps)(Controls);
