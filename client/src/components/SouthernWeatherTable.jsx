import React from 'react';
import TableRow from './TableRow.jsx'

const SouthernWeatherTable = (props) => {
  return (
		<table className="table">
		  <tbody>
        {props.darksky[2].daily.data.map((item, idx) => {
          return <TableRow key={idx} darksky={item} />
        })}
		  </tbody>
		</table>
  )
}
export default SouthernWeatherTable;