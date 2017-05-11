import React from 'react';

const SurfaceWeather = (props) => {
	console.log(props)
	return (
		 <div className='col-md-12 weather-section panel panel-warning'>
			 <div className="panel panel-warning">
			  <div className="panel-heading">
					  <p className='forecast'>{props.weatherdata.current_observation.icon}</p>
					  <img src={props.weatherdata.current_observation.icon_url} /><span className='temp'>{props.weatherdata.current_observation.temp_f} deg</span>
				</div>
				<table className="table">
				  <tbody>
					  <tr><td>Gusts {props.weatherdata.current_observation.wind_gust_mph}</td><td>Wind from {props.weatherdata.current_observation.wind_dir}</td></tr>
					  <tr><td>Dew Point: {props.weatherdata.current_observation.dewpoint_f}</td><td>Humidity: {props.weatherdata.current_observation.relative_humidity}</td></tr>
					  <tr><td>Precip Rate: {props.weatherdata.current_observation.precip_1hr_in}</td><td>Precip Accum {props.weatherdata.current_observation.precip_today_in}</td></tr>
					  <tr><td>Feels Like {props.weatherdata.current_observation.temp_f}</td><td>Pressure {props.weatherdata.current_observation.pressure_in}</td></tr>
				  </tbody>
 				</table>

			 </div>
		</div>
	)
};

export default SurfaceWeather;