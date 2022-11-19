const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "say",
    alias: [],

    comandos(client, message, args) {


        let texto = args.join(" ")
        if (!texto) { return message.channel.send("Te falta escribir un mensaje") }

        message.delete(1)
        message.channel.send({
            embeds: [new EmbedBuilder()
                .setTitle("Mensaje")
                .setDescription(texto)
                .setFooter({ text: `Solicitado por: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL()}` })
                .setTimestamp()
                .setColor("Random")
            ]
        });

    }
};