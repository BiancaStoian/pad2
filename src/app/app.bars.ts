import {IBar} from "./app.bar";
import {ARTICOLE_INCALTAMINTE, ARTICOLE_IMBRACAMINE, ACCESORII} from "./app.data";

export let BARS: Array<IBar> = [
  {
    name: 'Îmbrăcăminte',
    produse: ARTICOLE_IMBRACAMINE
  },
  {
    name: 'Încălțăminte',
    produse: ARTICOLE_INCALTAMINTE
  },
  {
    name: 'Accesorii',
    produse: ACCESORII
  },
];
