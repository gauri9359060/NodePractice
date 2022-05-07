const mongoose = require('mongoose')

const book = mongoose.Schema({
    "likes" :{type:Number, required:true},
    "coverimage" : {type:String, required:true},
    "content" :{type:String,required:true},
    "created_at" :{ type: String, default: (new Date()).getTime()}
})

module.exports = mongoose.model('book',book)