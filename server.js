
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors')
dotenv.config();

const app = express();
app.use(express.static('/public'))

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors())

//connect to Mongo Database

const usersdb =  'mongodb+srv://kipruto:kipruto@cluster0.oqr4n.mongodb.net/usersdb?retryWrites=true&w=majority';
mongoose.connect(usersdb, { useNewUrlParser: true ,  useUnifiedTopology: true, useFindAndModify: false }, ()=>{
    console.log('connected to MongoDB successfully!')
})

const PORT = 4000;



//Routes middelware
const routes = require('./routes/routes');

app.use('/', routes)

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
});

