const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({

    name:{
        type: 'string',
        required: true,
    }
}
)


module.exports= new mongoose.model('Author', authorSchema)