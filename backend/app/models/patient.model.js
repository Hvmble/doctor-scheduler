const mongoose = require('mongoose'); 


const patientSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    token: {
        type: mongoose.Schema.Types.String,
    },
    history: {
        type: mongoose.Schema.Types.String,
    }
})
const patientModel = mongoose.model('patient', patientSchema)

module.exports = { patientModel }