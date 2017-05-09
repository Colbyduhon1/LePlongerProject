import React from 'react';

const SurfaceWeather = (props) => {
		console.log('in divecontainer',props)
	return (
		 <div className='col-md-12 weather-section'>
			 <img src={props.weatherdata.current_observation.icon_url} />
			 <h6>{props.weatherdata.current_observation.temp_f}</h6>
			 <p>Feels Like {props.weatherdata.current_observation.temp_f}</p>
			 <p>Wind from {props.weatherdata.current_observation.wind_dir}</p>
			 <p>Gusts {props.weatherdata.current_observation.wind_gust_mph}</p>
			 <p>Dew Point: {props.weatherdata.current_observation.dewpoint_f}</p>
			 <p>Humidity: {props.weatherdata.current_observation.relative_humidity}</p>
			 <p>Precip Rate: {props.weatherdata.current_observation.precip_1hr_in}</p>
			 <p>Precip Accum {props.weatherdata.current_observation.precip_today_in}</p>
			 <p>Pressure {props.weatherdata.current_observation.pressure_in}</p>
		</div>
	)
};

export default SurfaceWeather;