var touch = document.querySelector('.touchpad')
var socket = new WebSocket(window.location.origin.replace(/^http/, 'ws'))


var height = touch.offsetHeight

function getXPercent(x) {
    return(Math.round((x / touch.offsetWidth) * 10))
} 
function getYPercent(y) {
    return(Math.round((y / touch.offsetHeight) * 10))
} 

touch.addEventListener('mousemove', (e) => {
    var data = {x:getXPercent(e.clientX), y:getYPercent(e.clientY)}
    console.log(data)
    socket.send(JSON.stringify(data))

})