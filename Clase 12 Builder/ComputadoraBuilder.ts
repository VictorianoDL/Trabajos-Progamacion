import { Computadora } from "./Computadora";

export class ComputadoraBuilder{
    private procesador:string = "AMD Radeon";
    private ram:number = 4;
    private almacenamiento:number = 250;
    private tarjetaGráfica:string = "RX 5700xt 8GB GDDR6";
    private sistemaOperativo:string = "windows 10 Home";
    
    setProcesador(procesador:string):ComputadoraBuilder{
        this.procesador = procesador;
        return this
    }
    setRam(ram:number):ComputadoraBuilder{
        this.ram = ram;
        return this
    }
    setAlmacenamiento(almacenamiento:number):ComputadoraBuilder{
        this.almacenamiento = almacenamiento;
        return this
    }
    setTargetaGrafica(tarjetaGráfica:string):ComputadoraBuilder{
        this.tarjetaGráfica = tarjetaGráfica;
        return this
    }
    setSistemaOperativo(sistemaOperativo:string):ComputadoraBuilder{
        this.sistemaOperativo = sistemaOperativo;
        return this
    }

    build():Computadora{
        return new Computadora(this.procesador,this.ram,this.almacenamiento,this.tarjetaGráfica,this.sistemaOperativo)
    }
}