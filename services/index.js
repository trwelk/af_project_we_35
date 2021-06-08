const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const EndUserRoutes = require('./routes/endUser.routes.js')

const app = new Koa();
app.use(bodyParser());

app.use(EndUserRoutes.routes())
 .use(EndUserRoutes.allowedMethods());

app.listen(9090);

console.log('Application is running on port 9090');