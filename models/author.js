const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({

    name:{
        type: 'string',
        required: true,
    }
}
)

authorSchema.pre('remove',function(next){
    Book.find({ author: this.id, }, (err,books)=>{
        if (err){
            next(err);
        }else if (books.length>0){
            next(new Error('The author has still books'))
        }else{
            next()
        }
    })
})

module.exports= new mongoose.model('Author', authorSchema)