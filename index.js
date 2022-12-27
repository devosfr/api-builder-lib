const fs = require('fs');
const api = require('../../../src/api/server');
const {writeFile} = require('fs/promises');
const newPageDir = "pages/test.vue";
const entry = require('prompt-sync')({sigint: true});
let vueFile = 'index.vue';
// let vueFileContent = '<template>\n<h1>Test</h1>\n</template>\n\n<script type="text/javascript" src="./script.js" />\n<style scoped type="text/css" src="./style.css" />';

let routeFile = null;
let jsFile = 'script.js';
let jsFileContent = "import { mapActions, mapState } from 'vuex' ;\n\n export default {}";
let styleFile = 'style.css';
let value;

module.exports.makePage = (flowName, endpointType) => {
   basePath = '${basePath}';
   routeFile = `_${flowName}.js`;
   controllerFile = `${flowName}.js`;
   let routeFileContent = `// Uncoment the code bellow to use controllers // controllers // const RetieveController = require('../controllers/contents/retrieve.controller'); // const PersistController = require('../controllers/contents/persist.controller');

// Uncoment the code bellow to use middlewares
// middlewares - global
// const authMiddleware = require('../middlewares/auth.middleware');
// const ddaAuthMiddleware = require('../middlewares/auth.dda.middleware');

// middlewares - open connection db

// const ddaDbMiddleware = require('../middlewares/dda-db.middleware');
// const bbMiddleware = require('../middlewares/eportfolio-db.middleware');

// const middlewaresDdaDb = [authMiddleware.verify, ddaDbMiddleware.open];
// const middlewaresEportfolioDb = [authMiddleware.verify, bbMiddleware.open];

// /health
module.exports.init = (instance, basePath) => {
  // the code bellow is just a example
  // instance.get(\`${basePath}/contents/artifacts/courses\`, middlewaresDdaDb, contentsRetieveController.listCoursesOfUser);
  
  instance.get(\`${basePath}/${flowName}/\`);

  instance.post(\`${basePath}/${flowName}/\`);
  
  instance.put(\`${basePath}/${flowName}/\`);
  
  instance.delete(\`${basePath}/${flowName}/\`);
}`;

   let persistControllerFileContent = `
'use strict';

// dependencies
const { response } = require('@obi-tec/express-response-models');

// use-cases
const templatesUseCases = require('../../../use-cases/templates');
const dynamodb = require('../../../services/dynamodb');

/** @type {import("express").RequestHandler} */
module.exports.create = async (req, res) => {
   const hierarchyData = await dynamodb.hierarchy.getByConsumerKey(req.authorization.consumerKey);
   const { consumerId, consumerKey } = req.authorization;
   const { userId } = req.authorization.payload;
   const token = req.headers.authorization.split(' ')[1];
   const { userName } = req.authorization.payload;
   const { title, description, able = true, cover = null, pagesStatus, programId, automatic } = req.body;
   const ret = await templatesUseCases.create(consumerId, consumerKey, title, description, able, userId, cover, userName, pagesStatus, programId, automatic, hierarchyData, token);
   return response.success(res, ret);
};

/** @type {import("express").RequestHandler} */
module.exports.delete = async (req, res) => {
   const { id } = req.params;
   const result = await templatesUseCases.deleteTemplate(id);
   return response.success(res, result);
};
`;

   let retriveControllerFileContent = `
'use strict';

// dependencies
const { response } = require('@obi-tec/express-response-models');

// use-cases
const templatesUseCases = require('../../../use-cases/templates');
const dynamodb = require('../../../services/dynamodb');

/** @type {import("express").RequestHandler} */
module.exports.getAll = async (req, res) => {
   const hierarchyData = await dynamodb.hierarchy.getByConsumerKey(req.authorization.consumerKey);
   const { consumerId, consumerKey } = req.authorization;
   const { userId, userSourcedId } = req.authorization.payload;
   const token = req.headers.authorization.split(' ')[1];
   const search = req.query.search;
   const considerUserId = req.query.considerUserId;
   const result = await templatesUseCases.getAll(consumerId, req.query.limit, req.query.offset, search, userId, userSourcedId, considerUserId, consumerKey, token, hierarchyData);
   return response.success(res, result);
};

module.exports.getComments = async (req, res) => {
   const { consumerId } = req.authorization;
   const portfolioId = req.query.portfolioId;
   const result = await templatesUseCases.getComments(consumerId, portfolioId);
   return response.success(res, result);
};

module.exports.hierarchyByConsumer = async (req, res) => {
   const hierarchyData = await dynamodb.hierarchy.getByConsumerKey(req.authorization.consumerKey);
   res.setHeader('Cache-Control', 'public, max-age=0');
   const result = await templatesUseCases.getPrograms(hierarchyData);
   return response.success(res, result);
};
`;


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
   console.log('TEST 1 arrayData: ', arrayData);
   let newDataString = null;
   arrayData.forEach(element => {
      switch (element) {
         case 'const':
            newDataString = newDataString ? newDataString + element + ' ' : element
            break;
         default:
            newDataString = element === null ? '' : newDataString + ' ' + element
            break;
      }
   });

   console.log('TEST 2 newDataString: ', newDataString);
   newDataString = newDataString.replace('null','');

   // TODO: Set method type 
   let newData = `const ${flowName}${endpointType} = require('./_${flowName}');\n` + newDataString;

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

