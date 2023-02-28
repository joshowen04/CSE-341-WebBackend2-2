const axios = require('axios');
const passport = require('passport');
require('dotenv').config({ path: './config/.env' });

// oauthCallback = function ({ query: { code } }, res) {
//   const body = {
//     client_id: process.env.GITHUB_CLIENT_ID,
//     client_secret: process.env.CLIENTSECRET,
//     code
//   };
//   console.log(`my token ${body}`);
//   const opts = { headers: { accept: 'application/json' } };
//   axios
//     .post('https://github.com/login/oauth/access_token', body, opts)
//     .then((_res) => _res.data.access_token)
//     .then((token) => {
//       // eslint-disable-next-line no-console
//       console.log('My token:', token);

//       //res.redirect(`/?token=${token}`);
//       if (token) {
//         res.render('dashboard', { layout: 'main' });
//       }
//     })
//     .catch((err) => res.status(500).json({ err: err.message }));
// };

// authRedirect = function (req, res) {
//   res.redirect(
//     `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
//   );
// };

authRedirect = () => {
  console.log('redirecting');
  passport.authenticate('github', { scope: ['user:email'] });
};

oauthCallback = () => {
  passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/login');
    };
};

module.exports = {
  authRedirect,
  oauthCallback
};
