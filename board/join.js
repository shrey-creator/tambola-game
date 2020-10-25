var socket=io.connect('http://localhost:5000');
var room=location.search.slice(1).split("=")[1];
socket.emit('join',room);
 console.log('hello')