//*Clases en js
class Persona {

    //*Propiedades
    static _conteo = 0;
    static get Conteo(){
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('soy un metodo estatico')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //*Metodos que se ejecuta cuando se crea una instancia de persona
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona._conteo++;
    }

    //*Set: establecer un valor
    set setComidaFavorita(comida){
        this.comida = comida;
    }
    //*get: recuperar un valor
     get getComidaFavorita(){
        return `comida favorita es ${this.comida}`;
     }

    //*Metodos
    quienSoy(a) {
        console.log(`soy ${this.nombre}`)
    }

    miFrase(){
        console.log(`mi frase es ${this.frase}`)
    }
}

//*Herencia
class Heroe extends Persona{
    clan = 'Sin clan';
    constructor(nombre, codigo, frase){
        //*Constructor de persona
        //*Este es el cosntructor del padre
        super(nombre, codigo, frase);
        this.clan = 'Los angeles';
    }
    quienSoy(){
        super.quienSoy();
    }

}

const p = new Persona('jasmin', 201924516, 'soy ing');
const spiderMan = new Heroe('jasmin', 201924516, 'soy ing');
console.log(spiderMan);