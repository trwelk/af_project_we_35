const uuid = require('uuid');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/test');

var workshopSchema = mongoose.Schema({
    id: String,
    title: String,
    description: String,
    conductor: String,
    date: Date,
    startTime:Number,
    noOfHours:Number,
    approved:Boolean,
    status:String,
    state:String,
    tags:Array

});

 var Workshop = mongoose.model("workshops", workshopSchema); 

const addWorkshop =  async obj => {
    var newWorkshop = new Workshop({
        id: uuid.v4(),
        title: obj.title,
        description: obj.description,
        conductor: obj.conductor,
        date: obj.date,
        startTime: obj.startTime,
        noOfHours: obj.noOfHours,
        state:"requested",
        tags:obj.tags

    });

    let savedWorkshop = await newWorkshop.save();
    return savedWorkshop
}


async function getWorkshops(seller) {
    let Workshops = await Workshop.find(null,function(err, response){
        if(err)
            console.log('Unable to retreive Workshops');
        else{
            return response;
        }
     });
     console.log('Workshops Retrieved',Workshops);
     return [...Workshops.values()];
}

async function getWorkshop(workshopId) {
    let query = {id:workshopId}
    let workshop = await Workshop.findOne(query,function(err, response){
        if(err)
            console.log('Unable to retreive Workshops');
        else{
            console.log('U',response);

            return response;
        }
     });
     return [workshop];
}

async function getWorkshopsByCategory(tag) {
    const query = { tags: tag }
    return new Promise((resolve, reject) => {
        Workshop.find(query,function(err, response){
            if(err)
                reject(err)
            else{
                resolve(response)
            }
         });
    })

}

async function deleteWorkshop(WorkshopId) {
    var query = { id: WorkshopId };
    let workshop = await Workshop.deleteOne(query,function(err, obj) {
        if (err) {
            console.log("errorrrrr")
        }
        console.log("1 document deleted");
      });
     return workshop;
}

async function updateWorkshop(workshop) {
    var filter = {'id': workshop.id};
    let updatedWorkshop = await Workshop.updateOne(filter, workshop, {new: true,},function(err, doc) {
        if (err) 
            console.log(err)
    });
     return workshop;
}

module.exports = {getWorkshopsByCategory,addWorkshop,getWorkshops,getWorkshop,updateWorkshop,deleteWorkshop};