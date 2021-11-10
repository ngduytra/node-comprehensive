const mongoose = require('mongoose')

const mongooses = mongoose.connect('mongodb+srv://exchange_data_app:Y3jxep9xYb7dzjuY@cluster0.chtee.mongodb.net/chat-app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})

module.exports = mongooses;