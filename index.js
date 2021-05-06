function hideFunction() {
    var x = document.getElementById("instructions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
var input = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("send").click();
  }
});
let value = ''
function getInputValue(){
    value = document.getElementById("myInput").value;
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
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = "; expires=" + date.toUTCString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

$(function(){

  if(readCookie('CodefireOnce') == null)
  {
    $(".cookie").css("display","block");
  }
  $("body").on("click",".icon",function(){
    $(this).closest("div.cookie").remove();
    createCookie('CodefireOnce','true',7);
  });
});