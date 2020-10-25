var socket=io.connect('http://localhost:5000');
var room=location.search.slice(1).split("=")[1];
socket.emit('join',room);

  
  var store=[];

$(".tapper").click(function(){
  randomnumber();


});
function randomnumber()
{
  var ran=Math.floor(Math.random()*90+1);
  while(true)
  {
    if(!(store.includes(ran)))
    {
      store.push(ran);
      break;
    }
    else {
      ran=Math.floor(Math.random()*90+1)

    }
  }
  
  socket.emit('number',{
    ran:ran,
    room:room})
}
socket.on('number',(data)=>{
  console.log('hi');
  var ran=data.ran;
  console.log(ran);
// var sound="../sounds/"+ran+".wav";
$("h1").text(ran);
$(".no").text(90-store.length);
$("."+ran).attr('id',"pressed");
// var audio=new Audio(sound);
// audio.play();
if(store.length>1)
{
  $(".prev").text(store[store.length-2])
}
})

