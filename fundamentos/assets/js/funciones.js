function saludar(){
    console.log('Hola mundo');
}

saludar();

const saludar2 = function(){
    console.log('hola mundo');
}

saludar2();

function saludo (nombre){
    return nombre;
}

console.log(saludo('jas'));


const saludarFlecha = () =>{
    console.log('hola feo');
}

saludarFlecha();
//*No se coloco return ni corchetes porque es algo de una sola fila
const sumar = (a,b) => a+b;
console.log(sumar(1,2));

const aleatorio = () => Math.random();
console.log(aleatorio());