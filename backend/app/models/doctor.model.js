const { default: mongoose } = require("mongoose")
const moongose = require("mongoose")

const doctorSchema = new moongose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialty: { type: String, required: true },
})
const doctorModel = mongoose.model('doctor', doctorSchema)
module.exports = { doctorModel }