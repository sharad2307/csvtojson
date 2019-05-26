const path = require('path');
const csvFilePath = path.join(__dirname, 'customer-data.csv');
const csv = require('csvtojson');
const fs = require('fs');

csv().fromFile(csvFilePath).then(
    (jsonObj) => {
        console.log(jsonObj)
        fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj, null, 2));
    }
)