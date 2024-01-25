const mongoose = require('mongoose'); 

const patientSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    history:{type:String,required:true},
})
const patientModel = mongoose.model('patient', patientSchema)

module.exports = { patientModel }