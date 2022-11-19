const { Client, GatewayIntentBits, Collection } = require("discord.js");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.comandos = new Collection();
client.slashcommands = new Collection();

function LLamarCarpetas() {
    ["eventos", "prefix", "slashcommands"].forEach(llamar => {
        try {

            require(`./LLamar/${llamar}`)(client);
            console.log(`\n`)
            console.log("Cargando carpeta >> " + llamar);
        } catch (e) {
            console.log("Error Error encontrado:")
            console.log(e)
        }

    })
};

LLamarCarpetas();

client.login("OTgwOTQ2NDA0MjkxNzkyOTU2.GMezBR.e0lCVEaYDFjUh6SW1jFKdmkRxD18SrQLmY0-yY");
// client.login("OTY3NTE1MTY5MjYzNTk5NjU2.YmRatw.F_GyqV4ZRsCdRFZ7Mt_wB6WmtlE");