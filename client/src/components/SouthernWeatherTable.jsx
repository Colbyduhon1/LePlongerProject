import React from 'react';
import TableRow from './TableRow.jsx'

const SouthernWeatherTable = (props) => {
  return (
		<table className="table">
		  <tbody>
		  <tr className='table-row'>
	        {props.darksky[2].daily.data.map((item, idx) => {
	          return <TableRow key={idx} darksky={item} />
	        })}
      </tr>
		  </tbody>
		</table>
  )
}
export default SouthernWeatherTable;