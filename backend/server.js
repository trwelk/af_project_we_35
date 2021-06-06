const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const VehicleRoutes = require('./routes/vehicle.routes.js')
const CategoryRoutes = require('./routes/categories.route.js')


const app = new Koa();
app.use(bodyParser());
app.use(cors(corsOptions));

 app.use(VehicleRoutes.routes())
 .use(VehicleRoutes.allowedMethods());

 app.use(CategoryRoutes.routes())
 .use(CategoryRoutes.allowedMethods());



app.listen(9090);

console.log('Application is running on port 9090');