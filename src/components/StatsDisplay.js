import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatDisplay extends Component {
  render() {
    return (
      <div className="StatsContainer">

        Your Health: {this.props.playerHealth}
        <br/>
        Heals: {this.props.playerHealsLeft}
        <br/>
        Grant Health: {this.props.grantHealth}
        <br/>
        Grant Lives: {this.props.grantLives}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		playerHealth: state.player.health,
		playerHealsLeft: state.player.healsLeft,
		grantHealth: state.grant.health,
		grantLives: state.grant.lives
	}
}

export default connect(mapStateToProps, null)(StatDisplay);
