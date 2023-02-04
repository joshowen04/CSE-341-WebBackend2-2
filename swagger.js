const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Winter2023 API',
    description: 'Contacts API'
  },
  host: 'cse-341-webbackend2-2.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/inventoryRoutes.js', './routes/userRoutes.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./server.js');
// });
