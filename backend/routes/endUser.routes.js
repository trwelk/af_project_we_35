const EndUserApi = require('../api/endUser.api.js');
const jsonwebtoken = require('jsonwebtoken');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/enduser'
   });
   //Used for a user to login. The users details along with a json web token is also sent back for authentication
   router.post('/login',async ctx => {
    let user = ctx.request.body;
    user = await EndUserApi.userLogin(user.email, user.password);
    let token = {}
    if(user){
             token = jsonwebtoken.sign({
                id: user.id,
                email: user.email,
                type: user.type,
                contact: user.contact,
                name: user.name,
                username: user.username,
                institution: user.institution
            }, "jwtSecret")
            ctx.body = {user:user,token:token};
            ctx.response.status = 201;
        }
        else{
            ctx.response.body = "AUTHERROR";
        }
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