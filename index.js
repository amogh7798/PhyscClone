var Peer =require('simple-peer')
var peer=new Peer({
  initiator: location.hash === "#init",
  trickle: false
})

peer.on('signal',function(data){
  document.getElementById('yourId').value=JSON.stringify(data)
})

document.getElementById('connect').addEventListener('click',function(){
  var otherid=JSON.parse(document.getElementById('otherId').value)
  peer.signal(otherid);
})

document.getElementById('send').addEventListener('click',function(){
  var Yourmessage=document.getElementById('YourMessage').value
  peer.send(Yourmessage);
})

peer.on('data',function(data){
  document.getElementById('messages').textContent += data + '\n'
})
