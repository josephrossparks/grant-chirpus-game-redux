import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div className="ControlsContainer">
      	<button>Attack</button>
      	<button>Heal</button>
      	<button>Flee</button>
      </div>
    );
  }
}

export default Controls;
