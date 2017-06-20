var csvFilePath = 'server/assets/stops.txt';
var Converter = require('csvtojson').Converter;

var converter = new Converter();
module.exports = {
  initialize: function(callback) {
    converter.fromFile(csvFilePath, function(err, result) {
      callback(err, result);
    })
    .on('json',(jsonObj)=>{
      jsonObj;
    })
    .on('done',(error)=>{
        console.log('end')
    });

  }
}
