const bouys = require('./bouys.js');


const getClosestBouy = function(lat, lng) {
  let closest;
  let total = Infinity;

  for (let key in bouys) {
    let latitudeB = bouys[key][0];
    let longitudeB = bouys[key][1];
    let currentTotal  = Math.abs(lat - latitudeB) + Math.abs(lng - longitudeB);

    if ( currentTotal < total ) {
      total = currentTotal;
      closest = key;
    }
  }

  return closest;
};




module.exports.getBouy = getClosestBouy;