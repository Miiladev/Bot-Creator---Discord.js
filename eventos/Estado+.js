const tiempo = 10 * 10;

const { ActivityType } = require("discord.js")

module.exports = {
    name: "ready",
    once: true,

    eventos(client) {


        const slashcommands = client.slashcommands.map(x => x)

        client.application.commands.set(slashcommands)
        console.log(`
        ═════════════════════════════════════════════════════

         > ${client.user.username} | ${client.user.id}

         > Creador:
            - NeblaK#8948
                > Github: https://github.com/ElNee-san
                > Discord: https://discord.gg/yHR67nQQWX

        ═════════════════════════════════════════════════════
        `)


        client.user.setPresence({
            activities: [
                { name: `Creado por: NeblaK#8948` },
            ],
            status: "dnd"
        });

    }
};