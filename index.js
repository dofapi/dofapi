const client = require('./client');
const serverApp = require('./server/dist/');
var swStats = require('swagger-stats');
var apiSpec = require('./server/swagger.json');

client({
  dir: 'client',
  beforeNext: async server => {
    const app = new serverApp.DofapiApplication();
    await app.boot();
    server.use(swStats.getMiddleware({ swaggerSpec: apiSpec }));
    server.use('/', app.requestHandler);
  },
});