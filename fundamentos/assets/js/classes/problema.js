const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
}

const Pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
}

const Melissa = {
    nombre: 'Melissa',
    edad: 35,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`);
    }
}

fher.imprimir();

//*Funcion para crear instancias
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad ${this.edad}`)
    }
}

//*Instancia de la funcion
const maria = new Persona('jasmin', 30);
console.log(maria);
maria.imprimir();