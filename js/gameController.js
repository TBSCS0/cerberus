var key = Math.floor((Math.random() * 10) + 1);

function encrypt(){
    var inputString = document.getElementById("text-box").value;
    var outputString = "";
    
    for(var i = 0; i < inputString.length; i++){
        outputString += String.fromCharCode(inputString.charCodeAt(i) + key);
    }

    return document.getElementById("text-box").value = outputString;
}

function decrypt(){
    var inputString = document.getElementById("text-box").value;
    var outputString = "";

    for(var i = 0; i < inputString.length; i++){
        outputString += String.fromCharCode(inputString.charCodeAt(i) - key);
    }

    return document.getElementById("text-box").value = outputString;
}


function hack(){
    if(document.getElementById("text-box").value == key){
        window.location.href = "win.html";
    }else{
        window.location.href = "lose.html";
    }
}

//var nome = window.prompt("Qual o seu nome?");
//alert("Prazer em conhecer voce " + nome);
//document.getElementById("xti").src = "img/xlamp_on.png";
//url = "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif";