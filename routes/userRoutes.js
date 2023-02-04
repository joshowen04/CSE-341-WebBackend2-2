'use strict';
module.exports = function (app) {
  const users = require('../controllers/userController');
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('../swagger.json');
  app.use(swaggerUi.serve);

  app.route('/users').get(users.list_all_users).post(users.create_user);
  app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
};
