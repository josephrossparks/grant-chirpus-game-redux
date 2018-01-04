import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetGame, playerAttack, playerHeal } from '../actions';

class Controls extends Component {
  render() {
    return (
      <div className="ControlsContainer">
      	<div className="GameControls">
      		<div className="GameButton" id="attackbtn" onClick={this.props.playerAttack}><p className="GameControlLabel">Attack</p></div>
      		<div className="GameButton" id="healbtn" onClick={this.props.playerHeal}><p className="GameControlLabel">Heal</p></div>
      	</div>
      	<div className="ResetControl">
      		<button id="fleebtn" onClick={this.props.resetGame}>Flee</button>
      	</div>
      </div>
    );
  }
}

const mapActionsToProps = { resetGame, playerAttack, playerHeal };

export default connect(null , mapActionsToProps)(Controls);
