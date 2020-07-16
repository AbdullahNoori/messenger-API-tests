const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.

const MessageSchema = new Schema ({
    
    title: { type: String, required },
    body: { type: String, required },
    author: { type: String, required },

})

const Message = mongoose.model()

module.esports = Message ('Message', MessageSchema)