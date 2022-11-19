const fs = require("fs");

module.exports = (client) => {

    try {

        fs.readdirSync("./comandos").forEach(carpeta => {
            const comandos = fs.readdirSync(`./comandos/${carpeta}`).filter(archivo => archivo.endsWith(".js"));

            for (const archivo of comandos) {

                const Comandos = require(`../comandos/${carpeta}/${archivo}`);

                client.comandos.set(Comandos.name.toLowerCase(), Comandos);

                console.log("Comando de prefix cargado" + archivo);
            }
        });

    } catch (e) {
        console.log("Error encontrado al momento de cargar los comandos con prefix")
        console.log(e);
    };

};