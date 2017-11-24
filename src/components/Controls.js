import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetGame, playerAttack, playerHeal } from '../actions';

class Controls extends Component {
  render() {
    return (
      <div className="ControlsContainer">
      	<button id="attackbtn" onClick={this.props.playerAttack}>Attack</button>
      	<button id="healbtn" onClick={this.props.playerHeal}>Heal</button>
      	<button id="fleebtn" onClick={this.props.resetGame}>Flee</button>
      </div>
    );
  }
}

const mapActionsToProps = { resetGame, playerAttack, playerHeal };

export default connect(null , mapActionsToProps)(Controls);
