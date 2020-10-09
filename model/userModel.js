const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

  name:{
      type:String,
      required:true,
      trim:true

  },

  email:{
      type:String,
      required:true
  },

  description:{
      type:String,

  }


})


module.exports = mongoose.model('userman', productSchema)