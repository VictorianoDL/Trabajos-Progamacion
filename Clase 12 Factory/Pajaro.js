"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
var Pajaro = /** @class */ (function () {
    function Pajaro(pRegion) {
        this.region = pRegion;
    }
    Pajaro.prototype.hacerSonido = function () {
        console.log("Twitt..... ");
    };
    Pajaro.prototype.moverse = function () {
        console.log("El pajaro se mueve");
    };
    return Pajaro;
}());
exports.Pajaro = Pajaro;
