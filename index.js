var server = require('ws').Server;
var s = new server({port : 1002});
var name;

s.on('connection',function(ws){
    
    ws.on('message',function(message){
       message = JSON.parse(message);
       
       s.clients.forEach(function e(client) {
        
            client.send(JSON.stringify({
                name: message.type,
                data: message.data 
            })); 
        
        });

    });
    console.log("one more client connected");
    ws.on('close',function(){
        console.log("i lost it")
    });
});