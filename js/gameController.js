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
        window.location.href = "w3hv@w1N3r.html";
    }else{
        window.location.href = "lose.html";
    }
}