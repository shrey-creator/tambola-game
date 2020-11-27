const express =require('express');
const app =express();
const socket=require('socket.io');
app.use(express.static('join'));
app.use(express.static('board'));

app.use(express.static('slip'));
//app.use(express.static('room'));
var passedNumber=[];
var number=[];
var server=app.listen((process.env.PORT || 5000),()=>{console.log("app started on localhost 5000")});
var io=socket(server);
io.on('connection',(socket)=>{
    
    socket.on('join',(room)=>{
        passedNumber=[];
        for( i=0;i<number.length;i++)
        {           if(number[i].room === room)
                    {
                        passedNumber.push(number[i].ran);
                    }
        }
       
        socket.join(room || 'demo');
        socket.emit('join',passedNumber);

    });
    socket.on('number',(data)=>{
        number.push(data);
        
    
        io.to(data.room).emit('number',data);
    });
    

})