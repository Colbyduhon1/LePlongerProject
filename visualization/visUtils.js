const bouys = require('./bouys.js');


const getClosestBouy = function(lat, lng) {
  let closest;
  let shortestDistance = Infinity;

  for (let key in bouys) {
    let xdiff = Math.abs( bouys[key][0] - lat );
    let ydiff = Math.abs( bouys[key][1] - lng );
    let currentDistance  = Math.sqrt( (xdiff * xdiff) + (ydiff * ydiff) );

    if ( currentDistance < shortestDistance ) {
      shortestDistance = currentDistance;
      closest = key;
    }
  }

  return closest;
};

//providing this field will let others determine which type of data
//they want to show the user, for now we're specifying waveheight(WVHT)
const formatBouyData = (data, field) => {
  let formatted = [];
  
  let rows = data.split('\n').slice(0, 14).map( (row) => {
    return row.split(' ').filter( (element) => {
      return element !== '';
    });
  });

  let colIndex = rows[0].indexOf(field);

  for (let i = rows.length -1; i > 1; i--) {
    let position = {x: (rows.length - (i)), y: +rows[i][colIndex] }
    formatted.push(position);
  }
  

  return formatted;
};


module.exports.getBouy = getClosestBouy;
module.exports.formatData = formatBouyData;

