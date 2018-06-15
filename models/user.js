// requiring third party modules
const mongoose = require("mongoose");
const {Schema} = mongoose;


// user schema
const userSchema = new Schema({
    userName: String,
    userMailId: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    userPassword: String
})

mongoose.model('user', userSchema)
