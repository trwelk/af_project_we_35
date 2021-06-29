const SuperUserApi = require('../api/superUser.api.js');
const jsonwebtoken = require('jsonwebtoken');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/superuser'
   });
   //Used for a user to login. The users details along with a json web token is also sent back for authentication
   router.post('/login',async ctx => {
    let user = ctx.request.body;
    user = await SuperUserApi.userLogin(user.username, user.password);
    let token = {}
    if(user.logged){
             token = jsonwebtoken.sign({
                id: user.id,
                email: user.email,
                type: user.type,
                contact: user.contact,
                name: user.name,
                username: user.username,
            }, "jwtSecret")
            ctx.body = {token:token, auth: true};
            ctx.response.status = 201;
        }
        else{
            ctx.body = {token:null, auth: false};
            ctx.response.status = 201;
        }
   });
   //Used for a user to sign up
   router.post('/', async ctx => {
    let user = ctx.request.body;
    user = await SuperUserApi.userSignUp(user);
    ctx.response.status = 201;
    ctx.body = user;
   });

   router.get('/:username', async ctx => {
    const username = ctx.params.username;
    ctx.body = await SuperUserApi.getUser(username);
   });

   router.get('/', async ctx => {
    const username = ctx.params.username;
    ctx.body = await SuperUserApi.getUsers();
   });

   router.put('/', async ctx => {
    let user = ctx.request.body;
    user = await SuperUserApi.updateUser(user);
    ctx.response.status = 201;
    ctx.body = user;
   });

   router.delete('/:id', async ctx => {
    let userid = ctx.params.id
    ctx.body = await SuperUserApi.deleteUser(userid);
})

module.exports = router;