import {IArticle} from "./app.model";

export let ARTICOLE_IMBRACAMINE: Array<IArticle> = [
  {
    name: 'Pantaloni dans damă',
    price: 27,
    image: 'assets/dans_dama.jpg',
    description: 'Pantalon cu talie joasă și croială reglabilă. Modern și confortabil.',
    soldOut: true
  },
  {
    name: 'Tricou drumeție damă',
    price: 25,
    image: 'assets/drumetie.jpg',
    description: 'Tricoul evacuează eficient transpirația și evită mirosurile neplăcute. Ideal pentru primele drumeții la munte.',
    soldOut: false
  }
];

export let ARTICOLE_INCALTAMINTE: Array<IArticle> = [
  {
    name: 'Încălțăminte drumeție bărbați',
    price: 80,
    image: 'assets/incaltaminte_drumetie_barbati.jpg',
    description: 'Talpă din cauciuc ce asigură rezistenţă şi aderenţă optimă. Faţa mid oferă susţinere, pentru o drumeţie sigură la munte.',
    soldOut: false
  },
  {
    name: 'Poante de piele',
    price: 45,
    image: 'assets/poante_piele.jpg',
    description: 'Material din piele pentru mișcare mai bună a boltei plantare. Bandă din nailon ce asigură flexibilitate și eleganță.',
    soldOut: false
  }
];

export let ACCESORII: Array<IArticle> = [
  {
    name: 'Racheta tenis BABOLAT',
    price: 180,
    image: 'assets/babolat.jpg',
    description: 'Noua rachetă BABOLAT Pure Drive oferă un echilibru perfect între lovituri puternice și control.',
    soldOut: false
  },
  {
    name: 'Bicicleta dama',
    price: 250,
    image: 'assets/bicicleta.jpg',
    description: 'Bicicleta de oras pentru dame.',
    soldOut: false
  }
];
