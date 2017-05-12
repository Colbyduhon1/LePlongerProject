import React from 'react';
import $ from 'jquery';
import {AreaChart} from 'react-easy-chart';

class OceanWeather extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   waveheight: this.props.graphHeight
    // }
  }


  render() {

     return(
      <div className='col-md-12 weather-section panel-text'>
        <h2>Wave Height for the Past 12 Hours</h2>
        <AreaChart
          axes
          grid
          noAreaGradient
          width={400}
          height={200}
          areaColors={['#be94ff']}
          yDomainRange={[0, this.props.graphHeight]}
          interpolate={'cardinal'}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default OceanWeather;