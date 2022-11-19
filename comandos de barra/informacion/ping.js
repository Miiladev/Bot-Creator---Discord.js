const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ver la latencia del bot",


    async slash(client, interaction) {


        interaction.reply({
            embeds: [new EmbedBuilder()
                .setTitle(client.user.username)
                .setDescription(`🏓 **Pong!**\n\n**Ping:** ${client.ws.ping}`)
                .setTimestamp()
                .setColor("Random")
            ]
        })
    }
};