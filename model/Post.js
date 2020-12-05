const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  
  artcategory: {
        type: String,
        required: true,
        min: 6,
       max: 100
    },
    comments:{
        type: String,
        required: false,
        max: 255
    },
    likes:{
        type: Number,
        required: false,
        default: 0
    },
    artdescription: {
        type: String,
        required: true,
        min: 50,
       max: 255
    },
    arttags: {
        type: String,
        required: true,
        min: 6,
       max: 50
    },
    image:{
           type: String
    },
    Imagefile:{
        data: Buffer,
        contentType: String
},
    date: {
        type: Date,
        default: Date.now()
    }


});

module.exports = mongoose.model('Post', PostSchema);
