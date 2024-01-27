const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: mongoose.Schema.Types.String, required: true },
    speciality: { type: mongoose.Schema.Types.String, required: true },
})
const doctorModel = mongoose.model('Doctor', doctorSchema)
module.exports =  doctorModel 