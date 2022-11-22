let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono', 123];
console.log('largo: ', juegos.length);

console.log(juegos[juegos.length-1]);
 //*Elemento: es lo que se encuentra el arreglo en la posicion especifica
 //*indice: es la posicion en l auqe va recorriendo el arreglo
 //*arr: es el arreglo
juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
} );

//*Se agrega elemennto al final del arreglo
juegos.push('F-zero');
console.log(juegos);

//*Agregar elemnto al prinicpio
juegos.unshift('Fure emplbe');
console.log(juegos);

//*Elimina el ultimo elemento del arreglo
juegos.pop();
console.log(juegos);

//*Eliminar elementos en posoicion especifica
//*Primera posicion: es desde que posicion se quieren borar los elmentos
//*segunda posicion: la cantidad de elementos que se quieren borrar
juegos.splice(1,2);
console.log(juegos);

//*Bucsar en que posicion se encuentran un elemento
let posicion = juegos.indexOf('Metroid');
console.log(posicion);

