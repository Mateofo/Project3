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
        type: String,
        required: true,
      },
    fats:{
        type: String,
        required: true,
      },
    carbs:{
        type: String,
        required: true
      },
    protein:{
        type: String,
        required: true
      } ,
      isLowCalorie: {
        type: Boolean,
        required: true
    } 
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;