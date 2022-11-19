const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "limpiar",
    description: "Eliminar cierta cantidad de mensaje",
    options: [
        {
            name: "cantidad",
            description: "Eliminar cierta cantidad de mensaje",
            type: ApplicationCommandOptionType.Number,
            required: true
        }
    ],

    async slash(client, interaction) {


        const cantidad = await interaction.options.getNumber("cantidad")

        if (isNaN(cantidad) || cantidad < 1) return interaction.reply("Valor invalido, proporciona un numero valido del 1 al 100");

        if (cantidad > 100) {
            interaction.reply("Valor invalido, proporciona un numero valido del 1 al 100");
            cantidad = 100;
        };

        interaction.channel.bulkDelete(cantidad, true).catch((e) => {
            interaction.reply("Error al intentar borrar los mensajes" + e)
        });

        interaction.reply({
            embeds: [new EmbedBuilder()
                .setTitle("El Basurero de los canales")
                .setDescription(cantidad + " **Mensajes eliminados**")
                .setFooter({ text: `Solicitado por: ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` })
                .setTimestamp()
                .setColor("Random")
            ]
        })
    }
};