const uuid = require('uuid');
const mongoose = require('mongoose');
var workshopTagchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
});

 var workshopTagMongo = mongoose.model("Workshoptag", workshopTagchema); 



async function getworkshopTags(seller) {
    let workshopTags = await workshopTagMongo.find(null,function(err, response){
        if(err)
            console.log('Unable to retreive workshopTag');
        else{
            return response;
        }
     });
     console.log('workshopTags Retrieved', workshopTagMongo);
     return [...workshopTags.values()];
}


module.exports = {getworkshopTags};