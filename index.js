// requring third party modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// declaring application constants
const PORT = process.env.PORT || 9000;
// requring files
const keys = require('./config/keys');
// connection to db
mongoose.connect(keys.mongoURI, (err, response) => {
    if(err){
        return console.log("failed to connect to db")
    }
    console.log(`connected to db, ${response}`);
})

const app = express();
// parse appliction/x-www-from urlencoded
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())
// requiring models
require('./models/user')
// requring services
require('./services/index')(app)

// listen to ports
app.listen(PORT)