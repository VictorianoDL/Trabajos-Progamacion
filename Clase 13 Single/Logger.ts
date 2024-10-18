// EJERCICIO 1
// Crea una clase Logger que registre mensajes en la consola. Esta clase debe seguir el patrón Singleton para que 
// solo exista una única instancia de Logger en toda la aplicación. Cada vez que se registre un mensaje, se debe agregar un número 
// incremental que indique el orden de los mensajes registrados.

export class Logger{

    private static instancia:Logger;
    private contador:number;
    
    private constructor(){
        this.contador = 0;    
    }

    public static getInstancia():Logger{
        if(Logger.instancia){
            console.log("Ya existe una intancia tipo Logger");
        }else{
            this.instancia = new Logger();
        }
        return this.instancia
    }

    public resgistroMensajes(msn:string):void{
        this.contador++;
        console.log("Mensaje Numero "+this.contador+" : "+msn);
    }
}
