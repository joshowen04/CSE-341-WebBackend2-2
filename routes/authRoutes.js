'use strict';
module.exports = function (app) {
  const auth = require('../controllers/authController.js');
  const swaggerUi = require('swagger-ui-express');
  const swaggerDocument = require('../swagger.json');
  const passport = require('passport');
  app.use(swaggerUi.serve);

  //app.route('/auth').get(auth.authRedirect);
  //app.route('/oauth-callback').get(auth.oauthCallback);

  app.get('/auth', passport.authenticate('github', { scope: ['user:email'] }));

  app.get(
    '/oauth-callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
  app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
  //   app
  //     .route('/contacts/:contactId')
  //     .get(contacts.read_a_contact)
  //     .put(contacts.update_a_contact)
  //     .delete(contacts.delete_a_contact);
};
