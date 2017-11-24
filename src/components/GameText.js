import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameText extends Component {
  render() {
    return (
      <div className="StatsContainer">
        {this.props.messageOnScreen}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		messageOnScreen: state.messageOnScreen
	}
}

export default connect(mapStateToProps, null)(GameText);