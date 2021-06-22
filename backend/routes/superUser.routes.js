const SuperUserApi = require('../api/superUser.api.js');
const jsonwebtoken = require('jsonwebtoken');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/superuser'
   });
   //Used for a user to login. The users details along with a json web token is also sent back for authentication
   router.post('/login',async ctx => {
    let user = ctx.request.body;
    user = await SuperUserApi.userLogin(user.email, user.password);
    let token = {}
    if(user){
             token = jsonwebtoken.sign({
                id: user.id,
                email: user.email,
                type: user.type,
                contact: user.contact,
                name: user.name,
                username: user.username,
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
    user = await SuperUserApi.userSignUp(user);
    ctx.response.status = 201;
    ctx.body = user;
   });

   router.get('/:username', async ctx => {
    const username = ctx.params.username;
    ctx.body = await SuperUserApi.getUser(username);
   });

   router.put('/', async ctx => {
    let user = ctx.request.body;
    user = await SuperUserApi.updateUser(user);
    ctx.response.status = 201;
    ctx.body = user;
   });

   router.delete('/', async ctx => {
    let user = ctx.request.body;
    ctx.body = await SuperUserApi.deleteUser(user.username);
})

module.exports = router;