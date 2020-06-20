let fs = require('fs')
let csv = require('csv-parser');

let csvData = [];

fs.createReadStream(__dirname + '/data.csv')
    .pipe(csv({ separator: ',' }))
    .on('data', (datarow) => {

        csvData.push(datarow);
    })
    .on('end', () => {
        console.log('Archivo CSV procesado')
    });

module.exports = csvData;
