const { default: mongoose } = require("mongoose")
const moongose = require("mongoose")

const doctorSchema = new moongose.Schema({
    id: {
        type: mongoose.Schema.Types.Number
    },
    admin: {
        type: mongoose.Schema.Types.Boolean,
    },
    active:{
        type: mongoose.Schema.Types.Boolean,
    }
})
const doctorModel = mongoose.model('doctor', doctorSchema)
module.exports = { doctorModel }