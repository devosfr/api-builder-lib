const getContent = (basePath, flowName) => {
   return `
 //Uncoment the code bellow to use controllers
 //controllers 
 //const ${flowName}RetieveController = require('../controllers/${flowName}/retrieve.controller');
 //const ${flowName}PersistController = require('../controllers/${flowName}/persist.controller');
 
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
 };
   `;
 } 
 
 const getContentById = (basePath, flowName) => {
   return ` 
 //Uncoment the code bellow to use controllers
 //controllers 
 //const ${flowName}RetieveController = require('../controllers/${flowName}/retrieve.controller');
 //const ${flowName}PersistController = require('../controllers/${flowName}/persist.controller');
 
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
 
   instance.get(\`${basePath}/${flowName}/:id\`);
 };
 `;
 } 
 
 const postContent = (basePath, flowName) => {
   return `
 //Uncoment the code bellow to use controllers
 //controllers 
 //const ${flowName}RetieveController = require('../controllers/${flowName}/retrieve.controller');
 //const ${flowName}PersistController = require('../controllers/${flowName}/persist.controller');
 
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
 
   instance.post(\`${basePath}/${flowName}/\`);
 };
 `;
 } 
 
 const putContent = (basePath, flowName) => {
   return `
 //Uncoment the code bellow to use controllers
 //controllers 
 //const ${flowName}RetieveController = require('../controllers/${flowName}/retrieve.controller');
 //const ${flowName}PersistController = require('../controllers/${flowName}/persist.controller');
 
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
 
   instance.put(\`${basePath}/${flowName}/\`);
 };
   `;
   
 } 
 
 const deleteContent = (basePath, flowName) => {
   return `
 //Uncoment the code bellow to use controllers
 //controllers 
 //const ${flowName}RetieveController = require('../controllers/${flowName}/retrieve.controller');
 //const ${flowName}PersistController = require('../controllers/${flowName}/persist.controller');
 
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
 
   instance.delete(\`${basePath}/${flowName}/\`);
 };
 `;
   
 } 
 
 const genericContent = (basePath, flowName) => {
   return  `
 //Uncoment the code bellow to use controllers
 //controllers 
 //const ${flowName}RetieveController = require('../controllers/${flowName}/retrieve.controller');
 //const ${flowName}PersistController = require('../controllers/${flowName}/persist.controller');
 
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
 };
 `;
   
 } 
 
 // Use-cases
 
 const getUseCaseContent = (flowName) => {
   return `
   // use cases
   const ${flowName} = require('./_${flowName}');
   
   module.exports = {
     ${flowName}
   };
     `
 } 
 
 module.exports.routeFileContent = (basePath, flowName, endpointType) => {
 
   switch (endpointType) {
     case 'get':
       return getContent(basePath, flowName);
     case 'getById':
       return getContentById(basePath, flowName);
     case 'post':
       return postContent(basePath, flowName);
     case 'put':
       return putContent(basePath, flowName);
     case 'delete':
       return deleteContent(basePath, flowName);
   
     default:
       return genericContent(basePath, flowName)
   }
 
 
 }
 
 module.exports.persistControllerFileContent = (endpointType) => {
   return `
 'use strict';
 
 // dependencies
 const { response } = require('@obi-tec/express-response-models');
 
 // use-cases
 const ${endpointType}UseCases = require('../../../use-cases/${endpointType}');
 //const dynamodb = require('../../../services/dynamodb');
 
 /** @type {import("express").RequestHandler} */
 module.exports.create = async (req, res) => {
   // just exemple snippets code exemple's bellow. 
   //  const hierarchyData = await dynamodb.hierarchy.getByConsumerKey(req.authorization.consumerKey);
   //  const { consumerId, consumerKey } = req.authorization;
   //  const { userId } = req.authorization.payload;
   //  const token = req.headers.authorization.split(' ')[1];
   //  const { userName } = req.authorization.payload;
   const ret = await ${endpointType}UseCases.${endpointType}();// Set params
   return response.success(res, ret);
 };
 
   `;
 } 
 
 module.exports.retriveControllerFileContent = (endpointType) => {
   return `
 'use strict';
 
 // dependencies
 const { response } = require('@obi-tec/express-response-models');
 
 // use-cases
 const ${endpointType}UseCases = require('../../../use-cases/${endpointType}');
 //const dynamodb = require('../../../services/dynamodb');
 
 /** @type {import("express").RequestHandler} */
 module.exports.getAll = async (req, res) => {
   // just exemple snippets code exemple's bellow. 
   //  const hierarchyData = await dynamodb.hierarchy.getByConsumerKey(req.authorization.consumerKey);
   //  const { consumerId, consumerKey } = req.authorization;
   //  const { userId, userSourcedId } = req.authorization.payload;
   //  const token = req.headers.authorization.split(' ')[1];
   //  const search = req.query.search;
   //  const considerUserId = req.query.considerUserId;
   const result = await ${endpointType}UseCases.${endpointType}();// Set params
   return response.success(res, result);
 };
   `;  
 }
 
 module.exports.useCaseIndexFileContent = (flowName) => {
 
 return `
 // use cases
 const ${flowName} = require('./_${flowName}');
 
 module.exports = {
   ${flowName}
 };
   `
 }
 
 module.exports.useCaseGenericFileContent = (flowName) => {
 
 const _flowName = flowName[0].toUpperCase() + flowName.substring(1);
 
 return `
 'use strict';
 
 // dependencies & services
 const database${_flowName} = require('../../services/database/${flowName}');
 
 module.exports = async () => {
   // Do Something..
 };
   `
 }