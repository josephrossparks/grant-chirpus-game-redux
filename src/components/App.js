import React, { Component } from 'react';
import { connect } from 'react-redux';

import StartScreen from './StartScreen.js';
import StatsDisplay from './StatsDisplay.js';
import Controls from './Controls.js';

class App extends Component {
  render() {

    if (this.props.gameOn === true) {
      return (
        <div className="App">
          <StatsDisplay />
          <Controls />
        </div>
      );
    } else {
      return ( <StartScreen /> )
    };

  }
}

function mapStateToProps(state) {
    return {
        gameOn: state.gameOn
    };
}


export default connect(mapStateToProps, null)(App);
