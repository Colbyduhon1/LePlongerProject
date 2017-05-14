import React from 'react';
import TableRow from './TableRow.jsx'

const CentralWeatherTable = (props) => {
	console.log('tjekrje', props)
  return (
		<table className="table">
		  <tbody>
        {props.darksky[1].daily.data.map((item, idx) => {
          return <TableRow key={idx} darksky={item} />
        })}
		  </tbody>
		</table>
  )
}
export default CentralWeatherTable;