
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./routes/userRoute');

// init app
const app = express();

// middleware
app.use(express.json());

const URI = process.env.MONGO_URI;

mongoose.connect(URI,{
useUnifiedTopology:true,
useCreateIndex:true,
useNewUrlParser:true,
useFindAndModify:false

},(err)=>{
 if(err) throw err;
 console.log('mongo db connected');    
})



app.use('/', require('./routes/userRoute'))


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})