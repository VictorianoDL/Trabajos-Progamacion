"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
var Computadora = /** @class */ (function () {
    function Computadora(pProcesador, pRam, pAlmacenamiento, pTargetaGrafica, pSistemaOperativo) {
        this.procesador = pProcesador;
        this.ram = pRam;
        this.almacenamiento = pAlmacenamiento;
        this.tarjetaGráfica = pTargetaGrafica;
        this.sistemaOperativo = pSistemaOperativo;
    }
    Computadora.prototype.toString = function () {
        return "Computadora: " + '\n' + this.procesador + '\n' + this.ram + '\n' + this.almacenamiento + '\n' + this.tarjetaGráfica + '\n' + this.sistemaOperativo;
    };
    return Computadora;
}());
exports.Computadora = Computadora;
