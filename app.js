const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require("body-parser")
const db = "mongodb://localhost:27017/daml"
const express = require('express');
const path = require('path');
const users=require('./routes/users');

// mongoose.createConnection(db,{
//     useNewUrlParser: true
// })
//
// //On Connection
// mongoose.connection.on('connected', () => {
//   console.log('Connected to database ' + db)
// });
// //On Error
// mongoose.connection.on('error', (err) => {
//   console.log('Database error: ' +err)
// });

mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)


const app = express();
app.use(cors());
app.use(bodyParser.json());


const port = 8080;
app.use('/users', users)
//Index Route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

//Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
