const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/win'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/win.html').pipe(res);
    }else{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Lights on...');

var inputString = "AAA";
var outputString = "";
var key = 2;


function encrypt(inputString, key){
    window.alert(inputString);
    for(var i = 0; i < inputString.length; i++){
        outputString += String.fromCharCode(inputString.charCodeAt(i) + key);
    }
    window.alert(outputString);
    outputString = "";
}

function decrypt(){
    window.alert(inputString);
    for(var i = 0; i < inputString.length; i++){
        outputString += String.fromCharCode(inputString.charCodeAt(i) - key);
    }
    window.alert(outputString);
    outputString = "";
}

function hack(){
    key = window.prompt("Insira a chave:");
    if (key == 2){
        window.alert("Parabens voce acertou!");
    }else{
        window.alert("A chave esta incorreta!");
    }
}
