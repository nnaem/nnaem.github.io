function hideFunction() {
    var x = document.getElementById("instructions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("sendMessage");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    document.getElementById('messageBox').value = "";
  }
  var input = document.getElementById("messageBox");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      addItem();
    }
  
  });
let value = ''
function getInputValue(){
    value = document.getElementById("sendMessage").value;
}
let whName = ''
function getWHName(){
    whName = document.getElementById("webhookName").value;
}
let whAvatar = ''
function getWHAvatar(){
    whAvatar = document.getElementById("webhookAvatar").value;
}
let whURL = ''
function getWHURL() {
    whURL = document.getElementById("webhookURL").value;
}
function onClickFunc() {
    getWHName()
    getWHAvatar()
    getWHURL()
    getInputValue()
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
setInterval(function(){onClickFunc()}, 1);