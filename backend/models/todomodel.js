const mongoose = require("mongoose")

const todoschema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    isdone: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Todo", todoschema)