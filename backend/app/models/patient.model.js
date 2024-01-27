const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    identification: { type: mongoose.Schema.Types.Number, required: true },
    name: { type: mongoose.Schema.Types.String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: { type: mongoose.Schema.Types.Number, required: true },
    gender: { type: mongoose.Schema.Types.String, required: true },
    address: { type: mongoose.Schema.Types.String, required: true },
    phone: { type: mongoose.Schema.Types.String, required: true },
    email: { type: mongoose.Schema.Types.String, required: true },
    history: { type: mongoose.Schema.Types.String, required: true },
})
const patientModel = mongoose.model('Patient', patientSchema)

module.exports = patientModel 