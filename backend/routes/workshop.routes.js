const workshopApi = require('../api/workshop.api');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/workshops'
});
//Used to get workshops
router.get('/', async ctx => {
    let seller = ctx.request.query.day;
    let workshopName = ctx.request.query.startTime;
    console.log("recieved Get")
     let workshops = await workshopApi.getWorkshops();
     console.log(workshops)
     ctx.body = workshops
});

router.get('/:id', async ctx => {
    let workshopId = ctx.params.id;
    console.log("recieved Get")
    let workshop = await workshopApi.getWorkshop(workshopId);
    ctx.body = workshop
});

//Used to add a new workshop
router.post('/', async ctx => {
    let workshop = ctx.request.body;
    console.log(workshop)
    workshop = await workshopApi.addWorkshop(workshop);
    ctx.response.status = 201;
    ctx.body = workshop;
});

//Used to update an workshop
router.patch('/', async ctx => {
    console.log("patch Recieved")
    let workshop = ctx.request.body;
    workshop = await workshopApi.updateWorkshop(workshop);
    ctx.response.status = 201;
    console.log("Patch : returned workshop" , workshop)
    ctx.body = workshop;
});

//Used to delete an workshop
router.delete('/:id', async ctx => {
    let workshopId = ctx.params.id;
    ctx.body = await workshopApi.deleteWorkshop(workshopId);
})


module.exports = router;