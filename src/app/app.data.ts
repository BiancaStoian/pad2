import {IArticle,IBar} from "./app.model";

export let ARTICOLE: Array<IArticle> = [
  {
    type: 1,
    name: 'Pantaloni dans damă',
    price: 27,
    image: 'assets/dans_dama.jpg',
    description: 'Pantalon cu talie joasă și croială reglabilă. Modern și confortabil.',
    quantity: 0
  },
  {
    type: 1,
    name: 'Tricou drumeție damă',
    price: 25,
    image: 'assets/drumetie.jpg',
    description: 'Tricoul evacuează eficient transpirația și evită mirosurile neplăcute. Ideal pentru primele drumeții la munte.',
    quantity: 2
  },
  {
    type: 2,
    name: 'Încălțăminte drumeție bărbați',
    price: 80,
    image: 'assets/incaltaminte_drumetie_barbati.jpg',
    description: 'Talpă din cauciuc ce asigură rezistenţă şi aderenţă optimă. Faţa mid oferă susţinere, pentru o drumeţie sigură la munte.',
    quantity: 1
  },
  {
    type:2,
    name: 'Poante de piele',
    price: 45,
    image: 'assets/poante_piele.jpg',
    description: 'Material din piele pentru mișcare mai bună a boltei plantare. Bandă din nailon ce asigură flexibilitate și eleganță.',
    quantity: 3
  },
  {
    type: 3,
    name: 'Racheta tenis BABOLAT',
    price: 180,
    image: 'assets/babolat.jpg',
    description: 'Noua rachetă BABOLAT Pure Drive oferă un echilibru perfect între lovituri puternice și control.',
    quantity: 7
  },
  {
    type: 3,
    name: 'Bicicleta dama',
    price: 250,
    image: 'assets/bicicleta.jpg',
    description: 'Bicicleta de oras pentru dame.',
    quantity: 1
  }
];

export let BARS: Array<IBar> = [
  {
    name: 'Îmbrăcăminte',
    type: 1
  },
  {
    name: 'Încălțăminte',
    type: 2
  },
  {
    name: 'Accesorii',
    type: 3
  },
];
