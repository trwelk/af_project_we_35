const uuid = require('uuid');
conferenceMongo = require('../models/conference.model')

const addConference = async obj => {
    return new Promise((resolve, reject) => {
        var newConference = conferenceMongo({
            id: uuid.v4(),
            name: obj.name,
            description: obj.description,
            date: obj.date,
            year: obj.year,
            month: obj.month,
            dates: obj.dates,
        });

        newConference.save()
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}


async function getConference() {
    return new Promise((resolve, reject) => {
        conferenceMongo.find(null, function (err, response) {
            if (err)
                reject(err)
            else {
                resolve(response);
            }
        });
    })

}

async function getConferenceById(Conference) {
    filter = { id:Conference }
    return new Promise((resolve, reject) => {
        conferenceMongo.findOne(filter, function (err, response) {
            if (err)
                reject(err);
            else {
                resolve(response);
            }
        });
    })
}


async function deleteConference(ConferenceId) {
    var query = { id: ConferenceId };
    let conference = await conferenceMongo.deleteOne(query,function(err, obj) {
        if (err) {
            console.log("errorrrrr")
        }
        console.log("1 document deleted");
      });
     return conference;
}

async function updateConference(Conference) {
    var filter = {'id': Conference.id};
    let updatedConference = await conferenceMongo.updateOne(filter, Conference, {new: true,},function(err, doc) {
        if (err) 
            console.log(err)
    });
     return Conference;
}


module.exports = { addConference, getConferenceById, getConference ,deleteConference,updateConference};