
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./route');
const cors = require('cors');
const app = express();
const port = 80;

mongoose.connect("mongodb://localhost:27017/bookstore" , {useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log("Connection sucessful...."))
.catch(err => console.log(err))

// body parser activation
app.use(express.json())
app.use(cors())

app.use('/app' , routes)
app.listen(port , () => console.log(`listening to port : ${port}`))