const workshopTagApi = require('../api/workshopTags.api');
const workshopApi = require('../api/workshop.api');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/workshoptags'
});
//Used to get workshopTag
router.get('/', async ctx => {
    console.log("recieved Get")
    let workshopTag = await workshopTagApi.getworkshopTags();
    ctx.body = workshopTag
});

//Used to get products for a given category
router.get('/:id/workshops', async ctx => {
    let categoryId = ctx.params.id;
    let subjects = await workshopApi.getWorkshopsByCategory( categoryId );
    ctx.body = subjects
});


module.exports = router;