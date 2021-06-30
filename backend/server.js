const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const mongoose = require('mongoose');
const AppConstants  = require('./constants/AppConstants');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://user:user@cluster0.ijxvo.mongodb.net/iCaf?retryWrites=true&w=majority');
const corsOptions ={
    origin:'http://localhost:1234', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const WorkshopRoutes = require('./routes/workshop.routes.js')
const EndUserRoutes = require('./routes/endUser.routes.js')
const workshopTagRoutes = require('./routes/workshopTags.routes')
const newsRoutes = require('./routes/news.routes')
const SuperUserRoutes = require('./routes/superUser.routes.js')
const researchPaperRoutes = require('./routes/researchPaper.routes')
const conferenceRoutes = require('./routes/conference.routes')


const app = new Koa();
app.use(bodyParser());
app.use(cors(corsOptions));

 app.use(WorkshopRoutes.routes())
 .use(WorkshopRoutes.allowedMethods());

 app.use(conferenceRoutes.routes())
.use(conferenceRoutes.allowedMethods());

 app.use(newsRoutes.routes())
 .use(newsRoutes.allowedMethods());

 app.use(researchPaperRoutes.routes())
 .use(researchPaperRoutes.allowedMethods());

 app.use(EndUserRoutes.routes())
 .use(EndUserRoutes.allowedMethods());
 app.use(workshopTagRoutes.routes())
 .use(workshopTagRoutes.allowedMethods());

 app.use(SuperUserRoutes.routes())
 .use(SuperUserRoutes.allowedMethods());


app.listen(9090);

console.log('Application is running on port 9090');