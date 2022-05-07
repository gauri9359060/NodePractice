const mongoose = require('mongoose')

const user = mongoose.Schema({
    "firstName" :{type:String, required:true},
    "lastName" : {type:String},
    "age" :{type:Number, required:true},
    "email" :{type:String,required:true},
    "profileImages":{type:String,required:true},
    "password" :{type:String,required:true},
    "created_at" :{ type: String, default: (new Date()).getTime()}
})

module.exports = mongoose.model('user',user)