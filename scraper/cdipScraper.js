const scrape = require('website-scraper');
const cheerio = require('cheerio');
const fs = require('fs');
const Promise = require('bluebird');


const promiseWrite = function(filePath, data) {
  return new Promise( (resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

const url = 'http://thredds.cdip.ucsd.edu/thredds/dodsC/cdip/model/MOP_grids/VE_0.001_seaswellnc.nc.html';
const options = {
  urls: [url],
  directory: '/leplonger/cdipData/attempt'
}

scrape(options)
  .then( (result) => {
    $ = cheerio.load(result[0].text);
    let data = $('pre').text();
    
    return promiseWrite('./cdipData/test.txt', data)
      

  })
  .then( (result) => {
    console.log('Success writing to file!')
  })

  .catch( (err) => {
    console.log('Error scraping: ', err.message);
  })
