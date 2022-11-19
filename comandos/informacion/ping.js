const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    alias: ["latencia", "ms"],

    comandos(client, message, args) {

        message.channel.send({
            embeds: [new EmbedBuilder()
                .setTitle(client.user.username)
                .setDescription(`🏓 **Pong!**\n\n**Ping:** ${client.ws.ping}`)
                .setTimestamp()
                .setColor("Random")
            ]
        });
    }
};