let value = ''
function getInputValue(){
    value = document.getElementById("myInput").value;
}
let whName = ''
function getWHName(){
    whName = document.getElementById("webhookName").whName;
}
let whURL = ''
function getWHURL(){
    whURL = document.getElementById("webhookURL").whURL;
}
let whAvatar = ''
function getWHAvatar(){
    whAvatar = document.getElementById("webhookAvatar").whAvatar;
}
function sendMessage() {
var request = new XMLHttpRequest();
request.open("POST", whURL);

request.setRequestHeader('Content-type', 'application/json');

var params = 
{
username: whName,
avatar_url: whAvatar,
content: value
}

request.send(JSON.stringify(params));
}