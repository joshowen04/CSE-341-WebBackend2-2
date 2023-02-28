'use strict';
module.exports = function (app) {
  const contacts = require('../controllers/contactsController');
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('../swagger.json');
  app.use(swaggerUi.serve);

  app.route('/contacts').get(contacts.list_all_contacts).post(contacts.create_a_contact);
  app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
  app
    .route('/contacts/:contactId')
    .get(contacts.read_a_contact)
    .put(contacts.update_a_contact)
    .delete(contacts.delete_a_contact);
};
