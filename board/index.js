
var socket=io.connect('https://myhousie.herokuapp.com/');
var room=location.search.slice(1).split("=")[1];
var store=[];
$(".roomName").text("Room - "+room);
if(room != null)
{
  $(".roomName").text("Room - "+room);
  socket.emit('join',room);
  socket.on('join',(data)=>{
    for(i=0;i<data.length;i++)
    {
      $("."+data[i]).attr('id',"pressed");

    }
  });
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
        //store.push(ran);
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
    for(var i=0;i<store.length;i++)
    {
  
    }
    //console.log('hi');
    store.push(data.ran)
    var ran=data.ran;
   
  var sound=ran+".wav";
  
  $("h1").text(ran);
  $(".no").text(90-store.length);
  $("."+ran).attr('id',"pressed");
  var audio=new Audio(sound);
   audio.play();
  if(store.length>1)
  {
    $(".prev").text(store[store.length-2])
  }
  })
  
}    


else{

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
        //store.push(ran);
        break;
      }
      else {
        ran=Math.floor(Math.random()*90+1)
  
      }
    }
    playSound(ran);
    
  }
  function playSound(ran)
  {
    store.push(ran)
    var sound=ran+".wav";
  
  $("h1").text(ran);
  $(".no").text(90-store.length);
  $("."+ran).attr('id',"pressed");
  var audio=new Audio(sound);
   audio.play();
  if(store.length>1)
  {
    $(".prev").text(store[store.length-2])
  }
  }

 
   
  
  
}


//https://myhousie.herokuapp.com/