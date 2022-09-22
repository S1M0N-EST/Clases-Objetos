class Animal {
  constructor() {}

  Movimiento() {
    console.log(' Correr y saltar.');
  }

  cazar(){
    console.log(' cazar.')
  }

  Rastrear(){
    console.log(' Rastrear con su olfato.')
  }
}

class Perro extends Animal {
  constructor(nombre){
    super()
    this.nombre = nombre;
  }
  ladrar() {
    console.log(' ladrar.');
  }
}

class Gato extends Perro {
  constructor(){
    super("Luna")
  }
  maullar() {
    console.log(' maullar.');
  }
}

/*Imprimir Gato*/
var G = new Gato()
console.log(G.nombre + " Puede:")
G.maullar();
G.Movimiento();
G.cazar();


/*Imprimir para la clase perro*/
var P = new Perro('Andres')
console.log(P.nombre + " Puede:")
P.ladrar();
P.Movimiento();
P.Rastrear();


/*Arreglo en objeto*/
var ListaAnimales = [
  {
      Tipo:"Felino",
      edad:8
  },
  {
      Tipo: "Canino",
      edad:10
  }
];

console.log(ListaAnimales);






