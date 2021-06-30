const keynoteApi = require('../api/keynote.api');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/keynotes'
});


//Used to get keynote
router.get('/', async ctx => {
    let keynote = await keynoteApi.getKeynote()
        .catch(error => {
            console.log(error)
            ctx.throw(400,'error');
        });
    ctx.body = keynote
});

router.get('/:id/subjects', async ctx => {
    let keynoteId = ctx.params.id;
    let keynote = await keynoteApi.getKeynoteById( keynoteId )
        .catch(error => {
            ctx.throw(404)
        })
    ctx.body = keynote
});

//Used to add a new keynote 
router.post('/', async ctx => {
    let keynote = ctx.request.body;
    keynote = await keynoteApi.addKeynote( keynote )
    .catch(error => {
        ctx.throw(404,error);
    });
    ctx.response.status = 201;
    ctx.body = keynote;
});

router.put('/', async ctx => {
    let research = ctx.request.body;
    research = await keynoteApi.updateKeynote(research);
    ctx.response.status = 201;
    ctx.body = research;
   });

   //Used to delete a researchPaper
   router.delete('/:id', async ctx => {
    let researchPaperId = ctx.params.id;
    ctx.body = await keynoteApi.deleteKeynote(researchPaperId)
        .catch(error => {
            ctx.throw(404,error);
        })
})


module.exports = router;