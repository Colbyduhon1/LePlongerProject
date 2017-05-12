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
        <h3 className='col-headers'>Wave Height: 12 Hr History</h3>
        <AreaChart
          axes
          grid
          noAreaGradient
          width={400}
          height={200}
          areaColors={['#082d8e']}
          yDomainRange={[0, this.props.graphHeight]}
          interpolate={'cardinal'}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default OceanWeather;