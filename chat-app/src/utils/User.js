const User = require('../db/user')
const Room = require('../db/room')

const addUser = async ({socketId ,username, room}) => {
    console.log(socketId);
    
    const roomFind = await Room.findOne({roomName: room})
    const roomNew = new Room({
        roomName: room,
    })
    if(!roomFind) {
        await roomNew.save()
    }

    const userFind = await User.findOne({userName: username, })
    const user = new User({userName: username, room: roomFind?._id ?? roomNew._id })
    if (!userFind) {
        await user.save()
    }
}

module.exports = {
    addUser
}