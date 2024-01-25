const mongoose = require("moongose")

const rolSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.String,
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: [true, "name rol is required"]
    }
})


const rolModel = mongoose.model("rol", rolSchema)
module.exports = rolModel