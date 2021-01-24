const Discord = require("discord.js");
const client = new Discord.Client();
const parser = new (require('rss-parser'))()

client.db = require("quick.db");

client.config = require("./config.js");

client.on("ready", () => {
    console.log("I'm ready also!");
    checkForUploads();
});

function checkForUploads() {
    if (client.db.fetch('postedVideos') == null) client.db.set('postedVideos', []);
    setInterval(() => {
        const url = "https://www.youtube.com/feeds/videos.xml?channel_id=" + client.config.channel_id;

        parser.parseURL(url, function(err, data) {
            channel_feed = data.items;

            if(channel_feed.length < 1 || channel_feed == undefined) return;

            channel_feed.forEach(function (item, index) {
                if client.db.has(item.id) {
                    //already in the database skip
                } else {
                    console.log("the bot found a video:" + item.id);
                    db.set(item.id, item);

                    let channel = client.channels.cache.get(client.config.discord_channel_id);
                    let message = client.config.messageTemplate
                        .replace(/{author}/g, item.author)
                        .replace(/{title}/g, Discord.Util.escapeMarkdown(item.title))
                        .replace(/{url}/g, item.link);
                    channel.send(message);
                }
            });
        })
    }, client.config.watchInterval);
}

client.login(process.env.BOT_TOKEN);

741657541846630542