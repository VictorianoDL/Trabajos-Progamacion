"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro(pRaza) {
        this.raza = pRaza;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("Guau..... ");
    };
    Perro.prototype.moverse = function () {
        console.log("El perro se mueve");
    };
    return Perro;
}());
exports.Perro = Perro;
