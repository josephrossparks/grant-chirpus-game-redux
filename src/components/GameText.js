import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameText extends Component {
  
  render(){

    return (
      <div className="GameText">
        <p>{this.props.messageOnScreen}</p>
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