//*Singelton: es una instancia unica de la clase

class Singleton{
    static instancia;
    nombre = '';
    constructor(nombre = ''){
        //*Se sabe que cuando se tiene una variable y no se le asigna valor es undefinded
        //*Para que es undefined sea true se pone !nomvaribale
        if(!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
       
    }
}

const instancia1 = new Singleton('RIono');
const instancia2 = new Singleton('jasmin');
console.log(instancia1.nombre);
console.log(instancia2.nombre);