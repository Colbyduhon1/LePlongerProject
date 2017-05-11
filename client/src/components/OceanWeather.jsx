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
        <AreaChart  data={this.props.data}/>
      </div>
    );
  }
}

export default OceanWeather;