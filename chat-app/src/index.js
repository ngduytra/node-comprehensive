const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMesssge } = require('./utils/message')
require('./db/mongooseConnect')
const {addUser} =  require('./utils/User')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const pathPublic = path.join(__dirname, 'public')
// app.use(express.json())
app.use(express.static(pathPublic))

io.on('connection', (socket)=> {

    

    socket.on('join', async({username, room}, callback)=>{
        try{
            await addUser({socketId: socket.id, username, room})
            socket.join(room)

            callback(generateMesssge('Welcome'))
            socket.broadcast.to(room).emit('message', generateMesssge(`${username} has joined`))
        } catch(e) {
            console.log(e);
        }
    })

    socket.on('sendMessage', async (data, callback)=>{
        // const user = await User.findOne({})
        const filter = new Filter()
        if(filter.isProfane(data)) {
            return callback('Profane is not allowed')
        }
        io.emit('message', generateMesssge(data))
        callback()
    })

    socket.on('share-location', (data, callback)=> {
        io.emit('locationMessage',  generateMesssge(`https://google.com/maps?q=${data.latitude},${data.longitude}`)) 
        callback()
    })

    socket.on('disconnect', ()=>{
        io.emit('message', generateMesssge('A user has left'))
    })
})

server.listen('3000', ()=>{
    console.log("Server is running on port 3000");
})

