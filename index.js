var express = require('express')
//* App setup
var app = express()
var port = 3030
var server = app.listen(port,()=>{
    console.log('listening to port '+port)
})

//* static files 
app.use(express.static('public'))