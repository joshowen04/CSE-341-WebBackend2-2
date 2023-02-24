// const inventoryRoutes = require('./routes/inventoryRoutes.js');
const axios = require('axios');
const path = require('path');

const https = require('https'),
  fs = require('fs');

const options = {
  key: fs.readFileSync('./config/ssl/client-key.pem'),
  cert: fs.readFileSync('./config/ssl/client-cert.pem')
};

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
(mongoose = require('mongoose')),
  (cors = require('cors')),
  (Users = require('./models/userModel.js')), //created model loading here
  (Inventory = require('./models/inventoryModel.js')),
  (bodyParser = require('body-parser'));

mongoose.Promise = global.Promise;
require('dotenv').config({ path: './config/.env' });
MONGODB_URL = process.env.MONGODB_URL;
console.log(`Database URL is ${MONGODB_URL}`);

mongoose.connect(MONGODB_URL);

app.use(cors());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

// app.get('/oauth-callback', ({ query: { code } }, res) => {
//   const body = {
//     client_id: process.env.GITHUB_CLIENT_ID,
//     client_secret: process.env.GITHUB_SECRET,
//     code
//   };
//   console.log(body);
//   const opts = { headers: { accept: 'application/json' } };
//   axios
//     .post('https://github.com/login/oauth/access_token', body, opts)
//     .then((_res) => _res.data.access_token)
//     .then((token) => {
//       // eslint-disable-next-line no-console
//       console.log('My token:', token);

//       res.redirect(`/?token=${token}`);
//     })
//     .catch((err) => res.status(500).json({ err: err.message }));
// });

const inventoryRouter = require('./routes/inventoryRoutes.js'); //importing route
inventoryRouter(app);

const userRouter = require('./routes/userRoutes.js'); //importing route
userRouter(app); //register the route

const authRouter = require('./routes/authRoutes.js'); //importing route
authRouter(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, () => console.log(`listening on port ${port}`));

https.createServer(options, app).listen(443);

// app.get()
// app.post()
// app.put()
// app.delete()
