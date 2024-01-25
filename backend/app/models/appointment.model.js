const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    id_patient: {
        type: mongoose.Schema.Types.ObjectId,
    },
    id_doctor: {
        type: mongoose.Schema.Types.ObjectId,
    },
    id_appointment: {
        type: mongoose.Schema.Types.ObjectId,
    },
    date: {
        type: mongoose.Schema.Types.Date,
    }
})
const appointmentModel = mongoose.model('appointment', appointmentSchema)
module.exports = { appointmentModel }