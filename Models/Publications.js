const mongoose = require('mongoose')

const publication = mongoose.Schema({
    "name" :{type:String, required:true},
    "created_at" :{ type: String, default: (new Date()).getTime()}
})

module.exports = mongoose.model('publication',publication)