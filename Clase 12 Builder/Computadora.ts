export class Computadora{
    private procesador:string;
    private ram:number;
    private almacenamiento:number;
    private tarjetaGráfica:string;
    private sistemaOperativo:string;

    public constructor(pProcesador:string,pRam:number,pAlmacenamiento:number,pTargetaGrafica:string,pSistemaOperativo:string){
        this.procesador = pProcesador;
        this.ram = pRam;
        this.almacenamiento = pAlmacenamiento;
        this.tarjetaGráfica = pTargetaGrafica;
        this.sistemaOperativo = pSistemaOperativo;
    }

    toString():string{
        return "Computadora: " + '\n' + this.procesador + '\n' +  this.ram + '\n' + this.almacenamiento + '\n' + this.tarjetaGráfica + '\n' + this.sistemaOperativo
    }
}