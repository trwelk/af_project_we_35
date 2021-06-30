const EndUserApi = require('../api/endUser.api.js');
const jsonwebtoken = require('jsonwebtoken');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/enduser'
   });
   
   //Used for a user to sign up
   router.post('/', async ctx => {
    let user = ctx.request.body;
    user = await EndUserApi.userSignUp(user);
    ctx.response.status = 201;
    ctx.body = user;
   });

   router.get('/:username', async ctx => {
    const username = ctx.params.username;
    ctx.body = await EndUserApi.getUser(username);
   });

   router.put('/', async ctx => {
    let user = ctx.request.body;
    user = await EndUserApi.updateUser(user);
    ctx.response.status = 201;
    ctx.body = user;
   });

   router.delete('/', async ctx => {
    let user = ctx.request.body;
    ctx.body = await EndUserApi.deleteUser(user.username);
})

module.exports = router;