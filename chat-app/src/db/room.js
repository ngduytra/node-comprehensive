const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    idSocketRoom: {
        type: String,
        // required: true,
        unique: true,
        default: '123'
    },
    roomName: {
        type: String,
        required: true,
        unique: true
    },
})

roomSchema.virtual('members', {
    ref: 'User',
    localField: '_id',
    foreignField: 'room'
})


const Room = mongoose.model('Room', roomSchema)

module.exports = Room