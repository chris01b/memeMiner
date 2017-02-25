var DiscordClient = require('discord.io');
var bot = new DiscordClient({
    autorun: true,
    email: "", // email
    password: "", // password
    //OR
    token: ""
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!mine!" && message.author.id === bot.user.id) { // command to trigger
      var interval = setInterval (function (){
        bot.sendMessage({
          to: 263300751986655232,
          message: "!mine" // message to send
        });
      }, 60000); // time between each interval in milliseconds
    }
});
