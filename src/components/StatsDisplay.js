import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatDisplay extends Component {
  render() {
    return (
      <div className="StatsContainer">

        <p>Your Health: {this.props.playerHealth}</p>
        <p>Heals: {this.props.playerHealsLeft}</p>
        <p>Grant Health: {this.props.grantHealth}</p>
        <p>Grant Lives: {this.props.grantLives}</p>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		playerHealth: state.playerHealth,
		playerHealsLeft: state.playerHealsLeft,
		grantHealth: state.grantHealth,
		grantLives: state.grantLives
	}
}

export default connect(mapStateToProps, null)(StatDisplay);
