import React from 'react';
import moment from 'moment';

const TableRow = (props) => {
	var day = moment.unix(props.darksky.time);
	var dayString = day._d.toString().slice(0, 4);
  return (
    <td>
      <span className='weather-box'>{dayString}</span>
      {props.darksky.icon === 'clear-day' ? <img className='weather-img' width='25px' src='clear-day.png'/> : ''}
      {props.darksky.icon === 'partly-cloudy-day' ? <img className='weather-img' width='25px' src='partly-cloudy-day.png'/> : ''}
      {props.darksky.icon === 'partly-cloudy-night' ? <img className='weather-img' width='25px' src='partly-cloudy-night.png'/> : ''}
      {props.darksky.icon === 'clear-night' ? <img className='weather-img' width='25px' src='clear-night.png'/> : ''}
      {props.darksky.icon === 'cloudy' ? <img className='weather-img' width='25px' src='cloudy.png'/> : ''}
      {props.darksky.icon === 'rain' ? <img className='weather-img' width='25px' src='rain.png'/> : ''}
      {props.darksky.icon === 'wind' ? <img className='weather-img' width='25px' src='wind.png'/> : ''}
      {props.darksky.icon === 'snow' ? <img className='weather-img' width='25px' src='snow.png'/> : ''}
      {props.darksky.icon === 'sleet' ? <img className='weather-img' width='25px' src='sleet.png'/> : ''}
      {props.darksky.icon === 'fog' ? <img className='weather-img' width='25px' src='fog.png'/> : ''}
      <span className='weather-box'>{props.darksky.temperatureMax}&#176;</span>
    </td>
  )
}
export default TableRow;

// var myDate = 1389118292950;

// var Hello = React.createClass({
//     render: function() {
//         return <div>Hello {this.props.name} from {moment(myDate).fromNow()}</div>;
//     }
// });

      // <td>{props.darksky.icon}</td>
      // <td>Possibility of Rain: {props.darksky.precipProbability}</td>
      // <td>Temp: min {props.darksky.temperatureMin} max {props.darksky.temperatureMax}</td>
      // <td>Wind Speed {props.darksky.windSpeed}</td>