// const routes = require('express').Router();
// const courses = require('../controllers/');

// routes.get('/',courses.displayCourses);

// module.exprts = routes;

const routes = require('express').Router();
const controller = require('../controllers/');

routes.get('/', controller.displayName);
routes.get('/courses', controller.displayCourses);
module.exports = routes;
