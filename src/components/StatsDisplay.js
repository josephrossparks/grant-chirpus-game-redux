import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatDisplay extends Component {
  render() {
    return (
      <div className="StatsContainer">
        {this.props.playerHealth}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		playerHealth: state.player.health
	}
}

export default connect(mapStateToProps, null)(StatDisplay);
