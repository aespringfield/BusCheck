var csvFilePath = 'server/assets/stops.txt';
var csv = require('csvtojson');
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
})
.on('done',(error)=>{
    console.log('end')
    if (error) {
      console.log('error:', error);
    }
})

module.exports = csv;
