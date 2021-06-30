const mongoose = require('mongoose');

var workshopSchema = mongoose.Schema({
    id: String,
    title: String,
    description: String,
    conductor: String,
    date: Date,
    startTime:Number,
    noOfHours:Number,
    approved:Boolean,
    state:String,
    tags:Array,
    link:String,
    imageUrl:String,
    email:String


});

module.exports = mongoose.model('Workshop', workshopSchema);