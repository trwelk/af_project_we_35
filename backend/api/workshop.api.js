const uuid = require('uuid');
const mongoose = require('mongoose');
const Workshop = require('../models/workshop.model')
const mailApi = require('../api/mail.api');

//  var Workshop = mongoose.model("workshops", workshopSchema); 

const addWorkshop =  async obj => {
    var newWorkshop = new Workshop({
        id: uuid.v4(),
        title: obj.title,
        description: obj.description,
        conductor: obj.conductor,
        link: obj.link,
        date: obj.date,
        startTime: obj.startTime,
        noOfHours: obj.noOfHours,
        state:"requested",
        tags:obj.tags,
        link:obj.link,
        imageUrl:obj.imageUrl,
        email:obj.email

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
    const approvedMessage = "Dear Applicant The Workshop Proposal has been approved"
    const declinedMessage = "Dear Applicant We are sorry to inform you that your Workshop Proposal has been declined"
    if(workshop.state == 'approved'){
        mailApi.sendMail("REQUEST APPROVED",approvedMessage,workshop.email)
    }else if (workshop.state == 'declined'){
        mailApi.sendMail("REQUEST DECLINED",declinedMessage,workshop.email)
    }
    let updatedWorkshop = await Workshop.updateOne(filter, workshop, {new: true,},function(err, doc) {
        if (err) 
            console.log(err)
    });
     return workshop;
}

module.exports = {getWorkshopsByCategory,addWorkshop,getWorkshops,getWorkshop,updateWorkshop,deleteWorkshop};