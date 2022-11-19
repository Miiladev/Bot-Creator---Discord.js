const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "userinfo",
    description: "Ver la informacion del usuario o de ti mismo",
    options: [
        {
            name: "usuario",
            description: "Ver la informacion del usuario o de ti mismo",
            type: ApplicationCommandOptionType.User,
            required: false
        }
    ],

    async slash(client, interaction) {


        const usuario = await interaction.options.getUser("usuario") || interaction.user

        const apodo = await interaction.guild.members.fetch(usuario)

        interaction.reply({
            embeds: [new EmbedBuilder()
                .setTitle(`Usuario ${usuario.tag}`)
                .setFields([
                    { name: "Nombre:", value: `${usuario.username}`, inline: true },
                    { name: "Descripcion", value: `${usuario.discriminator}`, inline: true },
                    { name: "ID", value: `${usuario.id}`, inline: true },
                    { name: "TAG", value: `${usuario.tag}`, inline: true },
                    { name: "Avatar", value: `[Link](${usuario.displayAvatarURL({ size: 1024, dynamic: true, extension: "png" })})`, inline: true },
                    { name: "Apodo", value: `${apodo.nickname !== null ? `${apodo.nickname}` : `Ninguno`}`, inline: true },
                    { name: "Bot?", value: `${usuario.bot ? `Si ✔` : `No ❌`}`, inline: true },
                ])
                .setFooter({ text: `Solicitado por: ${interaction.user.tag}`, iconURL: `${usuario.displayAvatarURL()}` })
                .setColor("Random")
                .setTimestamp()
            ]
        })
    }
};