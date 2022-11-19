const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "userinfo",
    alias: ["infouser", "user"],

    async comandos(client, message, args) {


        const usuario = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

        const apodo = await message.guild.members.fetch(usuario)

        message.channel.send({
            embeds: [new EmbedBuilder()
                .setTitle(`Usuario ${usuario.tag}`)
                .setFields([
                    { name: "Nombre:", value: `${usuario.username}`, inline: true },
                    { name: "Descripcion", value: `${usuario.discriminator}`, inline: true },
                    { name: "ID", value: `${usuario.id}`, inline: true },
                    { name: "TAG", value: `${usuario.tag}`, inline: true },
                    { name: "Avatar", value: `[Link](${usuario.displayAvatarURL({ size: 1024, dynamic: true, extension: "png" })})`, inline: true },
                    { name: "Apodo", value: `${apodo.nickname !== null ? `${apodo.nickname}` : `Ninguno`}`, inline: true },
                    { name: "Bot?", value: `${usuario.bot ? `Si ✔`: `No ❌`}`, inline: true },
                ])
                .setFooter({ text: `Solicitado por: ${message.author.tag}`, iconURL: `${usuario.displayAvatarURL()}` })
                .setColor("Random")
                .setTimestamp()
            ]
        })
    }
};