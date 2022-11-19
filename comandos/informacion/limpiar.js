const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "clear",
    alias: ["limpiar", "purge"],

    async comandos(client, message, args) {


        if (!message.member.permissions.has(["Administrator", "ManageMessages"])) return message.reply("No tienes permisos para este comando");
        if (!message.guild.members.me.permissions.has(["Administrator", "ManageMessages"])) return message.reply("No tengo permisos para este comando");

        if (!args[0]) return message.reply("No mencionaste un valor")
        if (isNaN(args[0]) || args[0] < 1) return message.reply("Valor invalido, proporciona un numero valido del 1 al 100");

        if (args[0] > 100) {
            message.reply("Valor invalido, proporciona un numero valido del 1 al 100");
            args[0] = 100;
        };

        message.channel.bulkDelete(args[0], true).catch((e) => {
            message.reply("Error al intentar borrar los mensajes" + e)
        });

        message.channel.send({
            embeds: [new EmbedBuilder()
                .setTitle("El Basurero de los canales")
                .setDescription(args[0] + " **Mensajes eliminados**")
                .setFooter({ text: `Solicitado por: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL()}` })
                .setTimestamp()
                .setColor("Random")
            ]
        });
    }
};