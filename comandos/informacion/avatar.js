const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "avatar",
    alias: ["foto"],

    comandos(client, message, args) {


        const usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

        message.channel.send({
            embeds: [new EmbedBuilder()
                .setTitle(`Avatar de ${usuario.tag}`)
                .setDescription(`[**Descargar**](${usuario.displayAvatarURL({ size: 1024, dynamic: true, extension: "png" })})`)
                .setImage(usuario.displayAvatarURL({ size: 1024, dynamic: true, extension: "png" }))
                .setFooter({ text: `Solicitado por: ${message.author.tag}`, iconURL: usuario.displayAvatarURL() })
                .setColor("Random")
                .setTimestamp()
            ]
        })
    }
};