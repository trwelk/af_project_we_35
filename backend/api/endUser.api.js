const uuid = require('uuid');
const mongoose = require('mongoose');

var endUserSchema = mongoose.Schema({
    id: String,
    email: String,
    password: String,
    username: String,
    type: String,
    contact: Number,
    name: String,
    institution: String
 });

 var User = mongoose.model("EndUsers", endUserSchema);

async function userSignUp (obj) {
    var newUser = new User({
        id: uuid.v4(),
        email: obj.email,
        password: obj.password,
        username: obj.username,
        type: obj.type,
        contact: obj.contact,
        name: obj.name,
        institution: obj.institution
    });

    let savedUser = await newUser.save();

    return savedUser;
}

async function userLogin(userEmail,userPassword) {
    let user = await User.findOne({ email: userEmail, password: userPassword }, function(err, response){
        if(err)
            console.log("Invalid User Details");
        else{
            return response
        }
     });

     let res = {
        "logged": false
    }

     if(typeof(user) != "undefined"){
         res = {
            "id": user.id,
            "email": user.email,
            "password": user.password,
            "username": user.username,
            "type": user.type,
            "contact": user.contact,
            "name": user.name,
            "institution": user.institution,
            "logged": true 
         }
     }
     return res;
}

async function getUser(username) {
    let user = await User.findOne({username: username}, function(err,response) {
        if(err)
            console.log(err);
        else
            return response;
    })

     return user;
}

async function updateUser(user) {
    var filter = {username: user.username, password: user.password};
    var oldUser = await this.getUser(user.username);
    user.id = oldUser.id;
    let updatedUser = await User.findOneAndReplace(filter,user, {
        new: true
    });
    return updatedUser;
}

async function deleteUser(username) {
    let deleteDetails = await User.deleteOne({ username: username }, function(err, response){
        if(err)
            console.log('Unable to delete user');
        else{
            return response;
        }
     });
     return deleteDetails;
}

module.exports = {userSignUp,userLogin,getUser,updateUser,deleteUser};