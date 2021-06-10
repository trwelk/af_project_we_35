const uuid = require('uuid');
const mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    id: String,
    code: String,
    type: String,
    mode: String,
    name: String,
});

 var Vehicle = mongoose.model("Vehicle", itemSchema); 

const addVehicle =  async obj => {
    var newVehicle = new Vehicle({
        id: uuid.v4(),
        code: obj.code,
        type: obj.type,
        mode: obj.model,
        name: obj.name,
    });

    let savedItem = await newVehicle.save();
    return savedItem
}


async function getVehicles(seller) {
    let vehicles = await Vehicle.find(null,function(err, response){
        if(err)
            console.log('Unable to retreive items');
        else{

            return response;
        }
     });
     return [...vehicles.values()];
}

module.exports = {addVehicle,getVehicles};