// requring third party modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const socketServer = require("socket.io");

// requring files
const keys = require('./config/keys');
// require random data
const randomData = require("./randomData/randomData")
// connection to db
mongoose.connect(keys.mongoURI, (err, response) => {
    if(err){
        return console.log("failed to connect to db")
    }
    console.log(`connected to db`);
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

// checking whether random data works
console.log(randomData.shuffleArray())


// PORT Connection
const serve = http.createServer(app);
const io = socketServer(serve);
serve.listen(9000, ()=> {
    console.log("Express server with socket running")
})


// socket io
io.on("connection", (client)=> {
    // emitting the events to the client
    client.on("njsListener", (interval) => {
        console.log(`client subscribing with interval of ${interval} milli seconds`)
        setInterval(() => {
            console.log("hitting")
            client.emit("randomData", randomData.shuffleArray())
        }, interval)
    })
})