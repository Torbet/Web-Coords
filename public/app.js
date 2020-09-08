var touch = document.querySelector('.touchpad')
var socket = new WebSocket(window.location.origin.replace(/^http/, 'ws'))

console.log(touch.width)

touch.addEventListener('mousemove', (e) => {
    socket.send('mouse x: ' + e.clientX)
    socket.send('mouse y: ' + e.clientY)
})