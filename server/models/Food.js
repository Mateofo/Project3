const mongoose = require('mongoose');

const { Schema } = mongoose;


const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
    category:{
        type: String,
        required: true,
      },
    image: {
        type: String
      },
    calories:{
        type: Number,
        required: true,
      },
    fats:{
        type: Number,
        required: true,
      },
    carbs:{
        type: Number,
        required: true
      },
    protein:{
        type: Number,
        required: true
      }  
})

const Food = mongoose.model('Food', foodSchema);

ule.exports = Food;