const uuid = require('uuid');
keynoteMongo = require('../models/keynote.model')

const addKeynote = async obj => {
    return new Promise((resolve, reject) => {
        var newKeynote = keynoteMongo({
            id: uuid.v4(),
            speaker: obj.speaker,
            description: obj.description,
            designation: obj.designation,
            linkedIn: obj.linkedIn,
            facebook: obj.facebook,
            instagram: obj.instagram,
        });

        newKeynote.save()
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}


async function getKeynote() {
    return new Promise((resolve, reject) => {
        keynoteMongo.find(null, function (err, response) {
            if (err)
                reject(err)
            else {
                resolve(response);
            }
        });
    })

}

async function getKeynoteById(keynote) {
    filter = { id:keynote }
    return new Promise((resolve, reject) => {
        keynoteMongo.findOne(filter, function (err, response) {
            if (err)
                reject(err);
            else {
                resolve(response);
            }
        });
    })
}


async function deleteKeynote(KeynoteId) {
    var query = { id: KeynoteId };
    let Keynote = await keynoteMongo.deleteOne(query,function(err, obj) {
        if (err) {
            console.log("errorrrrr")
        }
        console.log("1 document deleted");
      });
     return Keynote;
}

async function updateKeynote(Keynote) {
    var filter = {'id': Keynote.id};
    let updatedKeynote = await keynoteMongo.updateOne(filter, Keynote, {new: true,},function(err, doc) {
        if (err) 
            console.log(err)
    });
     return Keynote;
}


module.exports = { addKeynote, getKeynoteById, getKeynote ,deleteKeynote,updateKeynote};