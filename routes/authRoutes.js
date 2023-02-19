'use strict';
module.exports = function (app) {
  const auth = require('../controllers/authController.js');
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('../swagger.json');
  app.use(swaggerUi.serve);

  app.route('/auth').get(auth.authRedirect);
  app.route('/oauth-callback').get(auth.oauthCallback);

  //   app.get('/auth', (req, res) => {
  //     res.redirect(
  //       `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  //     );
  //   });

  //   app.get('/oauth-callback', ({ query: { code } }, res) => {
  //     const body = {
  //       client_id: process.env.GITHUB_CLIENT_ID,
  //       client_secret: process.env.GITHUB_SECRET,
  //       code,
  //     };

  app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
  //   app
  //     .route('/contacts/:contactId')
  //     .get(contacts.read_a_contact)
  //     .put(contacts.update_a_contact)
  //     .delete(contacts.delete_a_contact);
};
