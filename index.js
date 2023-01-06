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

   let routeFileContent = contents.routeFileContent(basePath, flowName, endpointType);
   // Making route
   writeFile(`src/api/routes/${routeFile}`, routeFileContent);

   // To create controller folder
   controllersPath = `src/api/controllers/${flowName}/`;
   if (fs.existsSync(controllersPath)) {
      console.log('Directory exists!')
    } else {
      console.log('Directory not found.');
      fs.mkdirSync(controllersPath);
    }
   // mark

   // Making controllers
   let persistControllerFileContent = null;
   let retriveControllerFileContent = null;
   if (endpointType === 'post' || endpointType === 'put') {
      persistControllerFileContent = contents.persistControllerFileContent(endpointType);      
      writeFile(controllersPath + 'persist.controller.js', persistControllerFileContent);
   } else {
      retriveControllerFileContent = contents.retriveControllerFileContent(endpointType);
      writeFile(controllersPath + 'retrieve.controller.js', retriveControllerFileContent);
   }  
   
   let useCaseIndexFileContent = contents.useCaseIndexFileContent(flowName);
   let useCaseGenericFileContent = contents.useCaseGenericFileContent(flowName);
  
   // To create use-case folder
   useCasesPath = `src/use-cases/${flowName}/`;
   fs.mkdirSync(useCasesPath);

   let data = fs.readFileSync('src/api/routes/index.js')

   let arrayData = data.toString().split(' ');
   
   let newDataString = null;
   arrayData.forEach(element => {

      if (element !== '// routes') {
         switch (element) {
            case 'const':
               newDataString = newDataString ? newDataString + element + ' ' : element
               break;
            default:
               newDataString = element === null ? '' : newDataString + ' ' + element
               if (element.includes('{')) {
                  newDataString = newDataString + `  ${flowName}.init(instance, basePath);\r\n`
               }
               break;
         }  
      }
   });

   newDataString = newDataString.replace('null','');

   let newData = `const ${flowName} = require('./_${flowName}');\n` + newDataString;

   fs.unlink('src/api/routes/index.js', function (err) {
      if (err) {
          throw err;
      }
      // console.log('Removed with Success!');
    });

   fs.writeFile('src/api/routes/index.js', `${newData}`, function (err) {
      if (err) {
          throw err;
      }
      // console.log('Created with Success!');
    });

    //TODO: create use-case

   // Error Bellow
   fs.writeFile(useCasesPath + 'index.js', useCaseIndexFileContent, function (err) {
      if (err) {
          throw err;
      }
      // console.log('Created with Success!');
    });

   fs.writeFile(useCasesPath + `_${flowName}.js`, useCaseGenericFileContent, function (err) {
      if (err) {
          throw err;
      }
      // console.log('Created with Success!');
    });
  

};

