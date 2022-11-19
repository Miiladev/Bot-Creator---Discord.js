const fs = require("fs");

module.exports = (client) => {

    try {

        fs.readdirSync("./comandos de barra").forEach(carpeta => {
            const comandos = fs.readdirSync(`./comandos de barra/${carpeta}`).filter(archivo => archivo.endsWith(".js"));

            for (const archivo of comandos) {

                const Comandos = require(`../comandos de barra/${carpeta}/${archivo}`);


                client.slashcommands.set(Comandos.name.toLowerCase(), Comandos);

                console.log("Comando de barra cargado" + archivo);
            }
        });

    } catch (e) {
        console.log("Error encontrado al momento de cargar los comandos de barra")
        console.log(e);
    };

};