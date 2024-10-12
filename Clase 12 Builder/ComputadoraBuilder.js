"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadoraBuilder = void 0;
var Computadora_1 = require("./Computadora");
var ComputadoraBuilder = /** @class */ (function () {
    function ComputadoraBuilder() {
        this.procesador = "AMD Radeon";
        this.ram = 4;
        this.almacenamiento = 250;
        this.tarjetaGráfica = "RX 5700xt 8GB GDDR6";
        this.sistemaOperativo = "windows 10 Home";
    }
    ComputadoraBuilder.prototype.setProcesador = function (procesador) {
        this.procesador = procesador;
        return this;
    };
    ComputadoraBuilder.prototype.setRam = function (ram) {
        this.ram = ram;
        return this;
    };
    ComputadoraBuilder.prototype.setAlmacenamiento = function (almacenamiento) {
        this.almacenamiento = almacenamiento;
        return this;
    };
    ComputadoraBuilder.prototype.setTargetaGrafica = function (tarjetaGráfica) {
        this.tarjetaGráfica = tarjetaGráfica;
        return this;
    };
    ComputadoraBuilder.prototype.setSistemaOperativo = function (sistemaOperativo) {
        this.sistemaOperativo = sistemaOperativo;
        return this;
    };
    ComputadoraBuilder.prototype.build = function () {
        return new Computadora_1.Computadora(this.procesador, this.ram, this.almacenamiento, this.tarjetaGráfica, this.sistemaOperativo);
    };
    return ComputadoraBuilder;
}());
exports.ComputadoraBuilder = ComputadoraBuilder;
