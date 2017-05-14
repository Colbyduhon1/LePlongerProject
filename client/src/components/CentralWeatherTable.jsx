import React from 'react';
import TableRow from './TableRow.jsx'

const CentralWeatherTable = (props) => {
  return (
		<table className="table">
		  <tbody>
		    <tr className='table-row'>
	        {props.darksky[1].daily.data.map((item, idx) => {
	          return <TableRow key={idx} darksky={item} />
	        })}
        </tr>
		  </tbody>
		</table>
  )
}
export default CentralWeatherTable;