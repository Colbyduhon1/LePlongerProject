import React from 'react';
import TableRow from './TableRow.jsx'

const NorthWeatherTable = (props) => {
  return (
		<table className="table">
		  <tbody>
		    <tr className='table-row'>
	        {props.darksky[0].daily.data.map((item, idx) => {
	          return <TableRow key={idx} darksky={item} />
	        })}
        </tr>
		  </tbody>
		</table>
  )
}
export default NorthWeatherTable;