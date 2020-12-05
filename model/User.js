const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name: {
type: String,
required: true,
min: 6,
max: 255

    },

//     password: {
//         type: String,
// required: true,
// min: 6,
// max: 1024

//     },
    gender:{
        type: String,
        required: true
    },
    phone:{
type: String,
required: true,
min: 10,
max: 100
    },
    password: {
        type: String,
        min: 3,
        max: 100,
    },
    email: {
        type: String,
required: true,
min: 6,
max: 255

    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('User', userSchema);