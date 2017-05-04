import React from 'react';


class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false;
    }
  }


  render() {
    return (
      <p>Dive Name</p>
      <p>Dive Coordinates</p>
      <p>Dive Description</p>
      <p>Dive Coordinates</p>
    )
  }
}
const Marker = (props) => {
  <p>Marker</p>
}

export default Marker;