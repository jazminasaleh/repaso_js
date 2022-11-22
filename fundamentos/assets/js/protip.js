//*Funcion que retorna un objeto
function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

console.log(crearPersona('jas', 'sal'));

const crearperson = (nombre, apellido) =>{
    return {nombre: nombre,
    apellido: apellido}
}

console.log(crearperson('andrea', 'pe;a'));

function imprimeArguments(){
    console.log(arguments);
}
imprimeArguments(1,'jajjaja', true);

const imprimir = (...args) => {
    return args
};
console.log(imprimir(1,'jakaka', false))


