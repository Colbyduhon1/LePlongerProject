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


const formatBouyData = (data) => {
  let formatted = [];

  return formatted;
};


module.exports.getBouy = getClosestBouy;
module.exports.formatTxt = formatBouyData;