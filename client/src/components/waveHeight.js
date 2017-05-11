import React from 'react';
import BarGraph from './barGraph.jsx';

class WaveHeight extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <BarGraph />
      </div>
    );
  }
}

export default WaveHeight;