const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Ver el perfil de otros o de ti mismo",
    options: [
        {
            name: "usuario",
            description: "Ver el perfil de otros o de ti mismo",
            type: ApplicationCommandOptionType.User,
            required: false
        }
    ],

    async slash(client, interaction) {


        const usuario = await interaction.options.getUser("usuario") || interaction.user

        interaction.reply({
            embeds: [new EmbedBuilder()
                .setTitle(`Avatar de ${usuario.tag}`)
                .setDescription(`[**Descargar**](${usuario.displayAvatarURL({ size: 1024, dynamic: true, extension: "png" })})`)
                .setImage(usuario.displayAvatarURL({ size: 1024, dynamic: true, extension: "png" }))
                .setFooter({ text: `Solicitado por: ${interaction.user.tag}`, iconURL: usuario.displayAvatarURL() })
                .setColor("Random")
                .setTimestamp()
            ]
        })
    }
};