const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    idSocket: [{
        type: String,
        // required: true,
        unique: true,
    }],
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Room'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User