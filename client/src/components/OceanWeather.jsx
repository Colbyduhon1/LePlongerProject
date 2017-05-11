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
        <p>Wave Height for the Past 12 Hours</p>
        <AreaChart
        axes
        grid
        yDomainRange={[0, 5]}
        interpolate={'cardinal'}
        data={this.props.data}/>
      </div>
    );
  }
}

export default OceanWeather;