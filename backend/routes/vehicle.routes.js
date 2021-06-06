const vehicleApi = require('../api/vehicle.api.js');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/vehicles'
   });
   //Used to get items
   router.get('/',async ctx => {
    let seller = ctx.request.query.sellerId;
    let itemName = ctx.request.query.itemName;
  
        ctx.body = await vehicleApi.getVehicles();
   });

   //Used to add a new item
   router.post('/', async ctx => {
    let item = ctx.request.body;
    console.log(item)
    item = await vehicleApi.addVehicle(item);
    ctx.response.status = 201;
    ctx.body = item;
   });

module.exports = router;