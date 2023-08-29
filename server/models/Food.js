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
<<<<<<< HEAD
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
=======
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
>>>>>>> 67094a5627ea189e2b5ecef550c11be4c496c6a6
