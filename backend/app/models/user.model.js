const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: [true, "user full-name is required"]
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: [true, "user email is required"]
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: [true, "user password is required"]
    },
    active: {
        type: mongoose.Schema.Types.Boolean,
    },
    token: {
        type: mongoose.Schema.Types.String,
    }

});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };