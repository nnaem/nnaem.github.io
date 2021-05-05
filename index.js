let value = ''
function getInputValue(){
    value = document.getElementById("myInput").value;
}
function sendMessage() {
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/839435542109618186/SOrZdVu9Hk8-qz4FhU2SaOYCnHMl_GDzkyMKtCIW4pIt6UtVY_EW_TLe1KuQtuN0J4t9");

request.setRequestHeader('Content-type', 'application/json');

var params = 
{
username: "memer",
avatar_url: "",
content: value
}

request.send(JSON.stringify(params));
}