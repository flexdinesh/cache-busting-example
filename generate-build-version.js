/* eslint-disable */
const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version;

const jsonData = {
  appVersion: appVersion
};

var jsonContent = JSON.stringify(jsonData);

fs.writeFile('./public/version.json', jsonContent, 'utf8', function(err) {
  if (err) {
    console.log('An error occured while writing JSON Object to version.json');
    return console.log(err);
  }

  console.log('version.json file has been saved with latest version number');
});

/* eslint-enable */
