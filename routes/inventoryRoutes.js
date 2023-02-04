'use strict';
module.exports = function (app) {
  const inventory = require('../controllers/inventoryController');
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('../swagger.json');
  app.use(swaggerUi.serve);

  app.route('/inventory').get(inventory.list_all_inventory).post(inventory.create_inventory);
  app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
};
