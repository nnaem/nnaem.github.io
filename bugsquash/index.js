let value = ''
function getInputValue(){
    value = document.getElementById("myInput").value;
}
function sendMessage() {
var request = new XMLHttpRequest();
request.open("POST", "https://canary.discord.com/api/webhooks/839530723387768872/JkKNm0nut9pM6qDGReABK1ui6EIRyZi9vU4pX0w2I7-Js0X1nHqDrWcu4hRpuvcFV2pz");

request.setRequestHeader('Content-type', 'application/json');

var params = 
{
username: "memer",
avatar_url: "",
content: value
}

request.send(JSON.stringify(params));
}