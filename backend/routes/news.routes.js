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



//Used to update an news
router.patch('/', async ctx => {
    console.log("patch Recieved")
    let news = ctx.request.body;
    news = await newsApi.updateNews(news);
    ctx.response.status = 201;
    console.log("Patch : returned news" , news)
    ctx.body = news;
});

//Used to delete an news
router.delete('/:id', async ctx => {
    let newsId = ctx.params.id;
    ctx.body = await newsApi.deleteNews(newsId);
})

module.exports = router;