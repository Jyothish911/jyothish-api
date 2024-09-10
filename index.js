const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const uri = "mongodb+srv://Jyothish:TbyLgruLY2yaZ5tI@jyothishcluster.9mkem.mongodb.net/";
mongoose.connect(uri);
const db = mongoose.connection;
const router = require('./routes/router.js');

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from this origin
  }));

db.once('open',()=>{console.log("dataBase Connected Successfully");});
db.on("error",function(error){console.log(error);});

app.use("/api/v1/players",router);

app.listen(2024,()=>{
    console.log("listening at port number 2024");
})