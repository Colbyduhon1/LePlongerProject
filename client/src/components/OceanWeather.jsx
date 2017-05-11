import React from 'react';
import $ from 'jquery';
import {AreaChart} from 'react-easy-chart';

class OceanWeather extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const embedCode = `
      <script>
      </script>
    `
    $('.weather-section').append(embedCode);
  }

  render() {
     return(
      <div className='col-md-12 weather-section'>
        <p>Lots of Ocean info</p>
        <AreaChart  data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]}/>
      </div>
    );
  }
}

export default OceanWeather;