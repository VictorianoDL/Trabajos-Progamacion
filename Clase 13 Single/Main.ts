import { Logger } from "./Logger";


let nuevoLogger = Logger.getInstancia();
console.log(nuevoLogger);

let segundoLogger = Logger.getInstancia();
console.log(segundoLogger);

nuevoLogger.resgistroMensajes("Este es mi primer mensaje");
console.log(nuevoLogger);

nuevoLogger.resgistroMensajes("Este es mi segundo mensaje");
console.log(nuevoLogger);

nuevoLogger.resgistroMensajes("Este es mi tercer mensaje");
console.log(nuevoLogger);