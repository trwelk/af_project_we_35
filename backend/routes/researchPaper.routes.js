const researchPaperApi = require('../api/researchPaper.api');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/researchpapers'
});


//call this to get all the researchPaper
router.get('/', async ctx => {
    let researchPaper = await researchPaperApi.getResearchPapers()
        .catch(error => {
            ctx.throw(400,'error',error);
        });
    ctx.body = researchPaper
});

router.put('/', async ctx => {
    let research = ctx.request.body;
    research = await researchPaperApi.updateResearch(research);
    ctx.response.status = 201;
    ctx.body = research;
   });

//call this to add a new researchPaper 
router.post('/', async ctx => {
    let researchPaper = ctx.request.body;
    researchPaper = await researchPaperApi.addResearchPaper( researchPaper )
    .catch(error => {
        ctx.throw(404,error);
    });
    ctx.response.status = 201;
    ctx.body = researchPaper;
});

   //Used to delete a researchPaper
router.delete('/:id', async ctx => {
    let researchPaperId = ctx.params.id;
    ctx.body = await researchPaperApi.deleteResearchPaper(researchPaperId)
        .catch(error => {
            ctx.throw(404,error);
        })
})

module.exports = router;