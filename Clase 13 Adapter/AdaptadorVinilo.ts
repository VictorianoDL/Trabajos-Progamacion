import { ReproductorMusica } from "./IReproductorMusica";
import { Vinilo } from "./Vinilo";

export class AdaptadorVinilo implements ReproductorMusica{
    private vinilo:Vinilo;
    private prendidoApagado:boolean;

    constructor(pVinilo:Vinilo){
        this.vinilo = pVinilo;
        this.prendidoApagado = false;
    }

    public reproducir():void{
        if(!this.prendidoApagado){
            console.log("Adaptando Vinilo..");
            this.vinilo.colocarAguja();
            this.prendidoApagado = true;   
        }else{
            console.log("Ya se esta reproduciendo")
        }
    }
    public detener():void{
        if(this.prendidoApagado){
            console.log("Adaptando Vinilo..");
            this.vinilo.levantarAguja();
            this.prendidoApagado = false;    
        }else{
            console.log("Ya esta detenido")
        }    
    }
}