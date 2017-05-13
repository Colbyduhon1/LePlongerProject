import React from 'react';
import moment from 'moment';

const TableRow = (props) => {
	var day = moment.unix(props.darksky.time);
	var dayString = day._d.toString().slice(0, 4);
  return (
    <tr>
      <td>{dayString}</td>
      <td>{props.darksky.icon}</td>
      <td>Possibility of Rain: {props.darksky.precipProbability}</td>
      <td>Temp: min {props.darksky.temperatureMin} max {props.darksky.temperatureMax}</td>
      <td>Wind Speed {props.darksky.windSpeed}</td>
    </tr>
  )
}
export default TableRow;

// var myDate = 1389118292950;

// var Hello = React.createClass({
//     render: function() {
//         return <div>Hello {this.props.name} from {moment(myDate).fromNow()}</div>;
//     }
// });