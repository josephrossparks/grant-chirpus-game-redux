import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetGame, playerAttack } from '../actions';

class Controls extends Component {
  render() {
    return (
      <div className="ControlsContainer">
      	<button onClick={this.props.playerAttack}>Attack</button>
      	<button>Heal</button>
      	<button onClick={this.props.resetGame}>Flee</button>
      </div>
    );
  }
}

const mapActionsToProps = { resetGame, playerAttack };

export default connect(null , mapActionsToProps)(Controls);
