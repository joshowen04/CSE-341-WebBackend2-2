// const inventoryRoutes = require('./routes/inventoryRoutes.js');
// const axios = require('axios');
const path = require('path');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
// const methodOverride = require('method-override');
const passport = require('passport');
// const partials = require('express-partials');
const session = require('express-session');
// const util = require('util');
const MongoStore = require('connect-mongo');
// const https = require('https'),
//   fs = require('fs');

// const options = {
//   key: fs.readFileSync('./etc/secrets/client-key.pem'),
//   cert: fs.readFileSync('./etc/secrets//client-cert.pem')
// };

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
//(mongoose = require('mongoose')),
(cors = require('cors')),
  (Users = require('./models/userModel.js')), //created model loading here
  (Inventory = require('./models/inventoryModel.js')),
  (bodyParser = require('body-parser'));

//mongoose.Promise = global.Promise;
require('dotenv').config({ path: './config/.env' });

//passport config
require('./config/passport')(passport);

connectDB();

app.use(cors());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

//static folders
app.use(express.static(path.join(__dirname, 'public')));

// //handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// session
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    //store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
  })
);

//passprot mw
app.use(passport.initialize());
app.use(passport.session());

const indexRouter = require('./routes/index.js'); //importing route
indexRouter(app);

const inventoryRouter = require('./routes/inventoryRoutes.js'); //importing route
inventoryRouter(app);

const userRouter = require('./routes/userRoutes.js'); //importing route
userRouter(app); //register the route

const authRouter = require('./routes/authRoutes.js'); //importing route
authRouter(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`));

//https.createServer(options, app).listen();
//https.createServer(options, app).listen(port, () => console.log(`listening on port ${port}`));

// app.get()
// app.post()
// app.put()
// app.delete()
