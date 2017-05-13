import React from 'react';
import TableRow from './TableRow.jsx'

const WeatherTable = (props) => {
  return (
		<table className="table">
		  <tbody>
        {props.darksky.map((item, idx) => {
          return <TableRow key={idx} darksky={item} />
        })}
		  </tbody>
		</table>
  )
}
export default WeatherTable;