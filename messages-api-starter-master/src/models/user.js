const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.

const Userschema = new Schema({
    username: {type: String, required: true },
    password: { type: String, select: false},
    messages: [{ type: Schema.Types.ObjectId, ref:"Hello this is my Message" }],
})


Userschema.pre('findOne', function (next) {
    this.populate('messages')
    next()
})

Userschema.pre('find', function (next){
    this.populate('messages')
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User