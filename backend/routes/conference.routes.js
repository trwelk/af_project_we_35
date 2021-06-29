const conferenceApi = require('../api/conference.api');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/conference'
});


//Used to get conference
router.get('/', async ctx => {
    let conference = await conferenceApi.getConference()
        .catch(error => {
            console.log(error)
            ctx.throw(400,'error');
        });
    ctx.body = conference
});

router.get('/:id/subjects', async ctx => {
    let conferenceId = ctx.params.id;
    let conference = await conferenceApi.getConferenceById( conferenceId )
        .catch(error => {
            ctx.throw(404)
        })
    ctx.body = conference
});

//Used to add a new conference 
router.post('/', async ctx => {
    let conference = ctx.request.body;
    conference = await conferenceApi.addConference( conference )
    .catch(error => {
        ctx.throw(404,error);
    });
    ctx.response.status = 201;
    ctx.body = conference;
});


router.put('/', async ctx => {
    let conference = ctx.request.body;
    conference = await conferenceApi.updateConference(conference);
    ctx.response.status = 201;
    ctx.body = conference;
   });


module.exports = router;