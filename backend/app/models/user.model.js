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
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }

});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;