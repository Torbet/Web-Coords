var express = require('express')
var ws = require('ws')
var fs = require('fs')
var path = require('path')

var app = express()
var port = process.env.PORT || 8080

var server = app.listen(port, console.log(`listening on port: ${port}`))

app.use('/', express.static(path.join(__dirname, '../public')))

var wss = new ws.Server({server})

var pos = JSON.parse(fs.readFileSync('./pos.json', 'utf8'))

wss.on('connection', (socket) => {

    console.log('connection')

    socket.on('message', (data) => {
        console.log(JSON.parse(data))
        pos.x = data.x
        pos.y = data.y
        fs.writeFileSync('./pos.json', data)
    })
})



