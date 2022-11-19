const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "say",
    description: "Mandar tu mensaje en un embed",
    options: [
        {
            name: "texto",
            description: "Mandar tu mensaje en un embed",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    async slash(client, interaction) {

        const texto = await interaction.options.getString("texto");
        interaction.channel.bulkDelete(1, true);
        interaction.reply({
            embeds: [new EmbedBuilder()
                .setTitle("Mensaje")
                .setDescription(texto)
                .setFooter({ text: `Solicitado por: ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` })
                .setTimestamp()
                .setColor("Random")
            ]
        });
    }
};