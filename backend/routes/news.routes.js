const newsApi = require('../api/News.api');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/news'
});


//Used to get news
router.get('/', async ctx => {
    let news = await newsApi.getNews()
        .catch(error => {
            console.log(error)
            ctx.throw(400,'error');
        });
    ctx.body = news
});

router.get('/:id/subjects', async ctx => {
    let newsId = ctx.params.id;
    let news = await newsApi.getNewsById( newsId )
        .catch(error => {
            ctx.throw(404)
        })
    ctx.body = news
});

//Used to add a new news 
router.post('/', async ctx => {
    let news = ctx.request.body;
    news = await newsApi.addNews( news )
    .catch(error => {
        ctx.throw(404,error);
    });
    ctx.response.status = 201;
    ctx.body = news;
});


module.exports = router;