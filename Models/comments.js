const mongoose = require('mongoose')

const comment = mongoose.Schema({
    "body":{type:String,required:true},
    "created_at" :{ type: String, default: (new Date()).getTime()}
})

module.exports = mongoose.model('comment',comment)