const fs = require("fs");

module.exports = (client) => {

    const eventos = fs.readdirSync("./eventos").filter(archivo => archivo.endsWith(".js"));

    for (const archivo of eventos) {

        try {
            
                    const Eventos = require(`../eventos/${archivo}`);
                    if (Eventos.once) client.on(Eventos.name, (...args) => Eventos.eventos(client, ...args))
                    else client.on(Eventos.name, (...args) => Eventos.eventos(client, ...args))
            
                    console.log("El evento " + archivo + " cargo correctamente")

        } catch (e) {
            console.log("Error encontrado:")
            console.log(e)
        }
    }

};