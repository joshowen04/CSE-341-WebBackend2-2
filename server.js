const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
(mongoose = require('mongoose')),
  (cors = require('cors')),
  (Contact = require('./models/contactsModels.js')), //created model loading here
  (bodyParser = require('body-parser'));

mongoose.Promise = global.Promise;
require('dotenv').config({ path: './config/.env' });
MONGODB_URL = process.env.MONGODB_URL;
console.log(`Database URL is ${MONGODB_URL}`);

mongoose.connect(MONGODB_URL);

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes = require('./routes/contactsRoutes.js'); //importing route
routes(app); //register the route

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

// app.get()
// app.post()
// app.put()
// app.delete()
