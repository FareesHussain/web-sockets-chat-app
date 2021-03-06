var express = require('express')
var socket = require('socket.io')

//* App setup
var app = express()
var port = 3030
var server = app.listen(port,()=>{
    console.log('listening to '+port)
})

//* static files 
app.use(express.static('public'))

//* Socket setup
var io = socket(server)

io.on('connection',(socket)=>{
    console.log('made a socket connection',socket.id)

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})