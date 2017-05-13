import React from 'react';

const SurfaceWeather = (props) => {
	//console.log(props)
	return (
		<div className='col-md-12 weather-section'>
			<img src={props.weatherdata.current_observation.icon_url} /><span className='forecast'>{props.weatherdata.current_observation.icon}</span><span className='temp'>{props.weatherdata.current_observation.temp_f} deg</span>
			<table className="table">
			  <tbody>
				  <tr><td>Gusts <span className='data'>{props.weatherdata.current_observation.wind_gust_mph}</span></td><td>Wind from <span className='data'>{props.weatherdata.current_observation.wind_dir}</span></td></tr>
				  <tr><td>Dew Point: {props.weatherdata.current_observation.dewpoint_f}</td><td>Humidity: <span className='data'>{props.weatherdata.current_observation.relative_humidity}</span></td></tr>
				  <tr><td>Precip Rate: <span className='data'>{props.weatherdata.current_observation.precip_1hr_in}</span></td><td>Precip Accum <span className='data'>{props.weatherdata.current_observation.precip_today_in}</span></td></tr>
				  <tr><td>Feels Like <span className='data'>{props.weatherdata.current_observation.temp_f}</span></td><td>Pressure <span className='data'>{props.weatherdata.current_observation.pressure_in}</span></td></tr>
			  </tbody>
				</table>
		</div>
	)
};

export default SurfaceWeather;