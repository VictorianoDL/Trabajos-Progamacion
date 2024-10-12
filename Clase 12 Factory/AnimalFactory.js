"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalFactory = void 0;
var Gato_1 = require("./Gato");
var Pajaro_1 = require("./Pajaro");
var Perro_1 = require("./Perro");
var AnimalFactory = /** @class */ (function () {
    function AnimalFactory() {
    }
    AnimalFactory.prototype.crearAnimal = function (tipo, atributos) {
        switch (tipo) {
            case "Perro":
                return new Perro_1.Perro(atributos.raza);
                break;
            case "Gato":
                return new Gato_1.Gato(atributos.machoHembra);
                break;
            case "Pajaro":
                return new Pajaro_1.Pajaro(atributos.region);
                break;
            default: throw new Error("Tipo de animal incorrecto");
        }
    };
    return AnimalFactory;
}());
exports.AnimalFactory = AnimalFactory;
