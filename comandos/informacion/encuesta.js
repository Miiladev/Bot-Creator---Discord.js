const { EmbedBuilder, ChannelType } = require("discord.js");

module.exports = {
    name: "encuesta",
    alias: ["poll"],

    async comandos(client, message, args) {

        if (message.member.permissions.has(["Administrator", "ManageMessages"])) return message.reply("No tienes permisos para este comando")
        if (message.guild.members.me.permissions.has(["Administrator", "ManageMessages"])) return message.reply("No tengo permisos para este comando")

        let canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        let texto = args.slice(1).join(" ");

        if (!canal) return message.reply("No mencionaste un canal");
        if (canal.type !== ChannelType.GuildText) return message.reply("No mencionaste un canal de texto");
        if (!texto) return message.reply("Debes poner una pregunta");

        message.delete(1);

        canal.send({
            embeds: [new EmbedBuilder()
                .setTitle("Encuesta de " + message.author.username)
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