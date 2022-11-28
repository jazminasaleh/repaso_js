class Persona{
    //*Un constructor
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }
    //*Otro constructor
    constructor(nombre, apel, pais){
        this.nombre = nombre;
        this.apel = apel;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info ${this.nombre}, ${this.apel}. ${this.pais}`)
    }
}

const nombre1 = 'Melissa',
        apel = 'Flores',
        pais = 'Honduras';

const nombre2 = 'Melissas',
        apel2 = 'Floress',
        pais2 = 'Hondurass';
    
const  persona1 = new Persona(nombre1, apel, pais);
const  persona2 = Persona.porObjeto(nombre2, apel2, pais2);

persona1.getInfo();
persona2.getInfo();