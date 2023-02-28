'use strict';
module.exports = function (app) {
  const indexRoute = require('../controllers/index.js');
  //const swaggerUi = require('swagger-ui-express');
  //const swaggerDocument = require('../swagger.json');
  //app.use(swaggerUi.serve);

  // @desc Login/Landing Page
  // @route Get /
  app.route('/').get(indexRoute.loginPage);

  //app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
};
