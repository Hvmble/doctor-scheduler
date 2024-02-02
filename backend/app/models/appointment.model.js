const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    description: { type: mongoose.Schema.Types.String },
    date: { type: mongoose.Schema.Types.Date, required: true },
    time: { type: mongoose.Schema.Types.String, required: true },
    dateRegister: { type: mongoose.Schema.Types.Date },
})
const appointmentModel = mongoose.model('appointment', appointmentSchema)
module.exports =  appointmentModel 