var express = require('express')
var ws = require('ws')
var path = require('path')

var app = express()
var port = process.env.PORT || 8080

var server = app.listen(port, console.log(`listening on port: ${port}`))

app.use('/', express.static(path.join(__dirname, '../public')))

var wss = new ws.Server({server})

wss.on('connection', (socket) => {

    console.log('connection')

    socket.on('message', (data) => {
        console.log(data)
    })
})

