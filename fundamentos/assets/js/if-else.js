let a = 5;

if(a >= 10){
    console.log(' a es mayor');
}else{
    console.log(' a es menor');
}

const hoy = new Date();
let dia = hoy.getDay(); //* dia de la semana
let mes = hoy.getMonth(); //*mes
let hora = hoy.getHours();//* la hora
let diaMES = hoy.getDate();//*dia del ames
let ano = hoy.getFullYear();//* el ano
console.log(ano);

//* === que se igual la condicion y tambien el tipo
//* == que sea igual la condicion pero no el tipo
//*en vez de hacer if se hace con un objeto
const diasLetras ={
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};

console.log(diasLetras[2]);
