const fs = require('fs');
const api = require('../../../src/api/server');
const {writeFile} = require('fs/promises');
const contents = require('./contents');
const entry = require('prompt-sync')({sigint: true});
let routeFile = null;

module.exports.makePage = (flowName, endpointType) => {
   basePath = '${basePath}';
   routeFile = `_${flowName}.js`;
   controllerFile = `${flowName}.js`;
   let routeFileContent = contents.routeFileContent(basePath, flowName);

   let persistControllerFileContent = contents.persistControllerFileContent();

   let retriveControllerFileContent = contents.retriveControllerFileContent();


   // To create a folder
   controllersPath = `src/api/controllers/${flowName}/`;
   fs.mkdirSync(controllersPath);
   // Making route
   writeFile(`src/api/routes/${routeFile}`, routeFileContent);

   // Making controller
   writeFile(controllersPath + 'persist.controller.js', persistControllerFileContent);
   writeFile(controllersPath + 'retrieve.controller.js', retriveControllerFileContent);

   let data = fs.readFileSync('src/api/routes/index.js')

   let arrayData = data.toString().split(' ');

   let newDataString = null;
   arrayData.forEach(element => {
      switch (element) {
         case 'const':
            newDataString = newDataString ? newDataString + element + ' ' : element
            break;
         default:
            newDataString = element === null ? '' : newDataString + ' ' + element
            if (element.includes('basePath)=>{')) {
               newDataString = newDataString + `  ${flowName}.init(instance, basePath);\r\n`
            }
            break;
      }
   });

   console.log('TEST 2 newDataString: ', newDataString);
   newDataString = newDataString.replace('null','');

   // TODO: Set method type 
   let newData = `const ${flowName} = require('./_${flowName}');\n` + newDataString;

   fs.unlink('src/api/routes/index.js', function (err) {
      if (err) {
          throw err;
      }
      console.log('Removed with Success!');
    });

   fs.writeFile('src/api/routes/index.js', `${newData}`, function (err) {
      if (err) {
          throw err;
      }
      console.log('Created with Success!');
    });

};

