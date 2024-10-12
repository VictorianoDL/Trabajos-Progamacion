"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(machoHembra) {
        this.machoHembra = machoHembra;
    }
    Gato.prototype.hacerSonido = function () {
        console.log("Miau..... ");
    };
    Gato.prototype.moverse = function () {
        console.log("El gato se mueve");
    };
    return Gato;
}());
exports.Gato = Gato;
