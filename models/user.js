
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    age: Number,
    country: String,
    password: String,
    createdAt: {
        type: Number,
        default: Date.now(),
    }
});
module.exports = mongoose.model("users", userSchema, "users");