const dia = 10;
const horaActaul = 10;

let horaApertura;
let mensaje;

if (dia === 0  || dia === 6){
    console.log('Fin de semana');
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
}

horaActaul>=horaApertura
    ? mensaje = 'Esta aboerto'
    : mensaje = `Esta cerrado, hoy se abre a las ${horaApertura}`;

console.log(mensaje);


// const elMayor = (a,b) =>{
    //return (a>b) ? a : b;
// }

//* funcion con ternario
//* nom funcion /parametros/ if ternario
const elMayor = (a,b) => (a>b) ? a : b;
 const tieneMiembros = miembro => miembro ? '2 dolares' : '10 dolares';
console.log(elMayor(20,15));
console.log(tieneMiembros(true));

const nota = 82.5;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' : 
              nota >= 85 ? 'B+' :
              nota >= 75 ? 'B' : 'F';

console.log(grado);