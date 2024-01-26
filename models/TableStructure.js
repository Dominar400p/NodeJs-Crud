let mongoose = require('mongoose')

let PostSChema = new mongoose.Schema({
    slno : {
        type : Number,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    }
})


module.exports = mongoose.model('crudData', PostSChema)