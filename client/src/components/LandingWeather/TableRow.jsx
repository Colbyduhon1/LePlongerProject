import React from 'react';
import moment from 'moment';

const TableRow = (props) => {
	let day = moment.unix(props.darksky.time);
	let dayString = day._d.toString().slice(0, 4);
  return (
    <td>
      <span className='weather-box'>{dayString}</span>
      {props.darksky.icon === 'clear-day' ? <img className='weather-img' width='39px' src='clear-day.png'/> : ''}
      {props.darksky.icon === 'partly-cloudy-day' ? <img className='weather-img' width='39px' src='partly-cloudy-day.png'/> : ''}
      {props.darksky.icon === 'partly-cloudy-night' ? <img className='weather-img' width='39px' src='partly-cloudy-night.png'/> : ''}
      {props.darksky.icon === 'clear-night' ? <img className='weather-img' width='39px' src='clear-night.png'/> : ''}
      {props.darksky.icon === 'cloudy' ? <img className='weather-img' width='39px' src='cloudy.png'/> : ''}
      {props.darksky.icon === 'rain' ? <img className='weather-img' width='39px' src='rain.png'/> : ''}
      {props.darksky.icon === 'wind' ? <img className='weather-img' width='39px' src='wind.png'/> : ''}
      {props.darksky.icon === 'snow' ? <img className='weather-img' width='39px' src='snow.png'/> : ''}
      {props.darksky.icon === 'sleet' ? <img className='weather-img' width='39px' src='sleet.png'/> : ''}
      {props.darksky.icon === 'fog' ? <img className='weather-img' width='39px' src='fog.png'/> : ''}
      <span className='weather-box'>Temp</span>
      <span className='weather-box info'>{props.darksky.temperatureMax}&#176;</span>
      <span className='weather-box'>Wind Speed</span>
      <span className='weather-box info'>{props.darksky.windSpeed} mph</span>
    </td>
  );
};

export default TableRow;
