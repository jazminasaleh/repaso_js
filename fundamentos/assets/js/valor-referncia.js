//*Lor primitivos se pasan por valor
//?Valor: se pasa unicamnate el valor
//*Solamnate al que se le asigna el valor cambia
let a = 10;
let b = a;
a=30;
console.log({a,b});

//*Los objetos y arreglos se pasan por referncia
//*En todas partes cambia el valoir
//?OBJETOS
let juan = {nombre: 'juan'};
let ana = juan;
ana.nombre = 'ana';
console.log({juan, ana});

//* ... es el operador spread
//*Con los tres puntos rompe la referncia que hay en js
//*y asi apunta a diferntes epsacios de memoria en la compu
//*y no es una sola y asi cuando se cambie 
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log(peter, tony);

//?ARREGLOS

const frutas = ['Manzana', 'Pera', 'Uva'];
frutas.push = 'Papaya';
//*[...] copia del arreglo de frutas
const otraFruta = [...frutas];
otraFruta.push('Mango');
console.table({frutas, otraFruta});