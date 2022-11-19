const { EmbedBuilder } = require("discord.js");

module.exports = {

    name: "interactionCreate",
    once: false,

    eventos(client, interaction) {

        if (!interaction.isChatInputCommand()) return;

        try {

            if (interaction.isChatInputCommand()) {
                const comandos = client.slashcommands.get(interaction.commandName)
                if (!comandos) return;
                comandos.slash(client, interaction);
            }

        } catch (e) {
            console.log("Error encontrado al momento de ejecutar un comando de barra")
            console.log(e)
        }
    }
};