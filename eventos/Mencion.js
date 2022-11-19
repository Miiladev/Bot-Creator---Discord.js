const { EmbedBuilder } = require("discord.js");

module.exports = {

    name: "messageCreate",
    once: false,

    eventos(client, message) {

        if (!message.guild || !message.channel || message.author.bot) return;


        if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {

            message.reply({
                embeds: [new EmbedBuilder()
                    .setTitle(client.user.username)
                    .setDescription(`Bot creado por **NeblaK#8948**`)
                    .setFields([
                        { name: "Github:", value: "https://github.com/ElNee-san" },
                        { name: "Discord:", value: "https://discord.gg/yHR67nQQWX" },
                    ])
                    .setColor("Random")
                    .setTimestamp()
                ]
            });

        };
    }
};