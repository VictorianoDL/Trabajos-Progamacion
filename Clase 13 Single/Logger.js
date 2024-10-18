"use strict";
// EJERCICIO 1
// Crea una clase Logger que registre mensajes en la consola. Esta clase debe seguir el patrón Singleton para que 
// solo exista una única instancia de Logger en toda la aplicación. Cada vez que se registre un mensaje, se debe agregar un número 
// incremental que indique el orden de los mensajes registrados.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
        this.contador = 0;
    }
    Logger.getInstancia = function () {
        if (Logger.instancia) {
            console.log("Ya existe una intancia tipo Logger");
        }
        else {
            this.instancia = new Logger();
        }
        return this.instancia;
    };
    Logger.prototype.resgistroMensajes = function (msn) {
        this.contador++;
        console.log("Mensaje Numero " + this.contador + " : " + msn);
    };
    return Logger;
}());
exports.Logger = Logger;
