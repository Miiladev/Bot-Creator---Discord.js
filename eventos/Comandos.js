const { EmbedBuilder } = require("discord.js");

module.exports = {

    name: "messageCreate",
    once: false,

    eventos(client, message) {

        if (!message.guild || !message.channel || message.author.bot) return;

        let prefix = "?";

        if (!message.content.toLocaleLowerCase().startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const comando = args.shift().toLocaleLowerCase();

        const cmd = client.comandos.get(comando) || client.comandos.find(cmd => cmd.alias && cmd.alias.includes(comando))

        try {

            if (!cmd) return;
            if (cmd) cmd.comandos(client, message, args);

        } catch (e) {
            console.log("Error encontrado al momento de ejecutar un comando con prefix")
            console.log(e)
        }
    }
};