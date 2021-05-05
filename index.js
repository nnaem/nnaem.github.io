let value = ''
function getInputValue(){
    value = document.getElementById("myInput").value;
}
let whName = ''
function getWHName(){
    whName = document.getElementById("webhookName").whName;
}
let whURL = webhookURL
function getWHURL(){
    whURL = document.getElementById("webhookURL").whURL;
}
let whAvatar = ''
function getWHAvatar(){
    whAvatar = document.getElementById("webhookAvatar").whAvatar;
}
function sendMessage() {
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/839530723387768872/JkKNm0nut9pM6qDGReABK1ui6EIRyZi9vU4pX0w2I7-Js0X1nHqDrWcu4hRpuvcFV2pz");

request.setRequestHeader('Content-type', 'application/json');

var params = 
{
username: whName,
avatar_url: whAvatar,
content: value
}

request.send(JSON.stringify(params));
}