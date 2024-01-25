const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
})


const roleModel = mongoose.model("rol", roleSchema)
module.exports = {roleModel}