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
//Aquí va tu token de tu bot
client.login("");
