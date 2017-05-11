import React from 'react';
import $ from 'jquery';
import {AreaChart} from 'react-easy-chart';

class OceanWeather extends React.Component {
  constructor(props) {
    super(props);
    // this.findCurrentMaxHeight = this.findCurrentMaxHeight.bind(this);
    this.state = {
      waveheight: this.props.graphHeight + 1
    }
  }

  // componentDidMount() {
  //   console.log('test');
  //   this.props.data[0].forEach( (point) => {
  //     console.log(point);
  //     if (point.y > this.state.waveh) {
  //       console.log('setting max to: ', point.y);
  //       this.setState({
  //         waveheight: point.y
  //       })
  //     }
  //   });
  // }


  render() {
     return(
      <div className='col-md-12 weather-section'>
        <p>Wave Height for the Past 12 Hours</p>
        <AreaChart
        axes
        grid
        noAreaGradient
        width={400}
        height={200}
        areaColors={['blue']}
        yDomainRange={[0, this.state.waveheight]}
        interpolate={'cardinal'}
        data={this.props.data}/>
      </div>
    );
  }
}

export default OceanWeather;