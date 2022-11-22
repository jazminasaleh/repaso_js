//*Siempre que se vean [] quiere decir que es un arreglo
const arr = new Array(10);
console.log(arr);
let videoJuegos = ['Mario3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});
console.log(videoJuegos[0]);//*posicion

//*arreglos con diferntes datos

let arregloCosas =[
    true,
    123,
    'jasmin',
    1+2+3,
    function(){},//*funcion
    ()=>{},
    {a: 1},//*objeto
    ['X', 'Megaman', 'Zero', 'Dr.Light']
];

console.log(arregloCosas);
console.log({arregloCosas});
//*Posicion de un arreglo dentro de otro arreglo
console.log(arregloCosas[7][2])