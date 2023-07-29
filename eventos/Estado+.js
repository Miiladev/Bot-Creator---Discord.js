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
         > Discord: https://discord.gg/yHR67nQQWX

        ═════════════════════════════════════════════════════
        `)


        client.user.setPresence({
            activities: [
                { name: `Creado por: Miiladev` },
            ],
            status: "dnd"
        });

    }
};
