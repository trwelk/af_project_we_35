const workshopTagApi = require('../api/workshopTags.api');
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


module.exports = router;