const mongoose = require("mongoose")

module.exports = mongoose.model("form", new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    message: { type: String, require: true },
}))