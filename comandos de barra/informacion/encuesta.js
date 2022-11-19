const { EmbedBuilder, ApplicationCommandOptionType, ChannelType } = require("discord.js");

module.exports = {
    name: "encuesta",
    description: "Hacer una encuesta en el servidor",
    options: [
        {
            name: "canal",
            description: "Canal para la encuesta",
            type: ApplicationCommandOptionType.Channel,
            required: true

        },
        {
            name: "texto",
            description: "Texto para la encuesta",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    async slash(client, interaction) {

        if (interaction.member.permissions.has(["Administrator", "ManageMessages"])) return interaction.reply("No tienes permisos para este comando")
        if (interaction.guild.members.me.permissions.has(["Administrator", "ManageMessages"])) return interaction.reply("No tengo permisos para este comando")


        const canal = await interaction.options.getChannel("canal")
        const texto = await interaction.options.getString("texto")

        if (canal.type !== ChannelType.GuildText) return interaction.reply("No mencionaste un canal de texto");

        interaction.reply({ content: `"La encuesta se mando correctamente en el canal " + ${canal}`, ephemeral: true })

        canal.send({
            embeds: [new EmbedBuilder()
                .setTitle("Encuesta de " + interaction.user.username)
                .setDescription(texto)
                .setTimestamp()
                .setColor("Random")
            ]
        }).then(async (reacion) => {
            reacion.react("🟩")
            reacion.react("🟥")
        })
    }
};