const socket = io()

const $sendMessageButton = document.getElementById('increase');
const $boxMessage = document.getElementById('box-mess');
const $shareLocationButton = document.getElementById('shareLocation')
const $message = document.querySelector('#messages')

const messageTemplate = document.querySelector('#message-template').innerHTML
const messageLocation = document.querySelector('#message-location').innerHTML

const {username, room}  = Qs.parse(location.search, { ignoreQueryPrefix: true})

socket.on('message', (data)=>{
    console.log(data);
    const html = Mustache.render(messageTemplate, {
        message: data.text,
        createdTime: moment(data.createdTime).format('h:mm a')
    })
    $message.insertAdjacentHTML('beforeend', html)
})


$sendMessageButton.addEventListener('click', ()=>{
    $sendMessageButton.setAttribute('disabled', 'disabled')
    socket.emit('sendMessage', $boxMessage.value, (error)=>{
        $sendMessageButton.removeAttribute('disabled')
        $boxMessage.value = ''
        $boxMessage.focus()
        if(error) {
            console.log(error);
        } else {
            console.log('The message was delivered');
        }
    })
})

$shareLocationButton.addEventListener('click', ()=>{
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.');
    }
    $shareLocationButton.setAttribute('disabled','disabled')

    navigator.geolocation.getCurrentPosition((location) => {
        socket.emit('share-location', {latitude: location.coords.latitude, longitude: location.coords.longitude}, (error)=>{
            $shareLocationButton.removeAttribute('disabled')
            if(error) {
                console.log(error);
            } else {
                console.log(' Location Shared!');
            }
        })
    })
})

socket.on('locationMessage', (data)=>{
    const html = Mustache.render(messageLocation, {
        linkLocation: data.text,
        createdTime: moment(data.createdTime).format('h:mm a')
    })
    $message.insertAdjacentHTML('beforeend', html)
})

socket.emit('join', {username, room}, ({text, createdTime})=>{
    const html = Mustache.render(messageTemplate, {
        message: text,
        createdTime: moment(createdTime).format('h:mm a')
    })
    $message.insertAdjacentHTML('beforeend', html)
})