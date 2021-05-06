const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Succesfully logged into "+client.user.tag);
});

client.on("message", async msg => {
    if(msg.channel.id !== "800685495445094450")return
    let friendsOnline = document.getElementById("friendsOnline");
    let fOnline = document.createElement("li");
    fOnline.setAttribute("id", client.user.tag);
    fOnline.appendChild(document.createTextNode(msg.author.tag+": "+msg.content));
    friendsOnline.appendChild(fOnline);
});

client.login("TOKEN");