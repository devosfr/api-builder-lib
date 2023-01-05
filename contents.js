module.exports.routeFileContent = (basePath, flowName) => {
  return `// 
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
  }`;
}

module.exports.persistControllerFileContent = () => {
  return `
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
} 

module.exports.retriveControllerFileContent = () => {
  return `
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
}