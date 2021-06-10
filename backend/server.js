const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const WorkshopRoutes = require('./routes/workshop.routes')


const app = new Koa();
app.use(bodyParser());
app.use(cors(corsOptions));

 app.use(WorkshopRoutes.routes())
 .use(WorkshopRoutes.allowedMethods());


app.listen(9090);

console.log('Application is running on port 9090');