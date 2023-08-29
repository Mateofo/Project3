const mongoose = require('mongoose');

const { Schema } = mongoose;

const bodySchema = new Schema({
    plan:{
        type: String,
        required: true,  
    },
    foods:[
        {
            type: Schema.Types.ObjectId,
            ref:"Food"
        }
    ]
})

const Body = mongoose.model('Body', bodySchema)

module.exports = Body;