"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptadorVinilo = void 0;
var AdaptadorVinilo = /** @class */ (function () {
    function AdaptadorVinilo(pVinilo) {
        this.vinilo = pVinilo;
        this.prendidoApagado = false;
    }
    AdaptadorVinilo.prototype.reproducir = function () {
        if (!this.prendidoApagado) {
            console.log("Adaptando Vinilo..");
            this.vinilo.colocarAguja();
            this.prendidoApagado = true;
        }
        else {
            console.log("Ya se esta reproduciendo");
        }
    };
    AdaptadorVinilo.prototype.detener = function () {
        if (this.prendidoApagado) {
            console.log("Adaptando Vinilo..");
            this.vinilo.levantarAguja();
            this.prendidoApagado = false;
        }
        else {
            console.log("Ya esta detenido");
        }
    };
    return AdaptadorVinilo;
}());
exports.AdaptadorVinilo = AdaptadorVinilo;
