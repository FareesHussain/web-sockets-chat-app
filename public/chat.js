//* make connection
var socket = io.connect("http://localhost:3030")

//* Query DOM

var message = document.getElementById('message');
 handle = document.getElementById('handle'),
 btn = document.getElementById('send'),
 output = document.getElementById('output');

//* Emit events

btn.addEventListener('click',()=>{
    console.log('button clicked')
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
})

//* listen for events
socket.on('chat',(data)=>{
    console.log(data)
    output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>'
})