
import { Vinilo } from "./Vinilo";
import { AdaptadorVinilo } from "./AdaptadorVinilo";

let miVinilo:Vinilo = new Vinilo();
let miReproductor:AdaptadorVinilo = new AdaptadorVinilo(miVinilo);

miReproductor.reproducir();
miReproductor.detener();
miReproductor.detener();
miReproductor.reproducir();
miReproductor.reproducir();

