const express =require('express');
const app =express();
const socket=require('socket.io');
app.use(express.static('join'));
app.use(express.static('board'));

app.use(express.static('slip'));

app.use(express.static('sounds'));

var server=app.listen((process.env.PORT || 5000),()=>{console.log("app started on localhost 5000")});
var io=socket(server);
io.on('connection',(socket)=>{
    socket.on('join',(room)=>{
        socket.join(room || 'demo')
    });
    socket.on('number',(data)=>{
        io.to(data.room).emit('number',data);
    });
    

})