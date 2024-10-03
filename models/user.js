const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testapp1");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
});

// Check if the model already exists before compiling it again
module.exports = mongoose.models.user || mongoose.model('user', userSchema);
