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

const p = new Persona('jasmin', 201924516, 'soy ing');

p.setComidaFavorita = 'El yogurt';
console.log(p);
p.quienSoy();
p.miFrase();
console.log(p.getComidaFavorita); 
//*Cantidad de instancias de la clase
console.log('conteo', Persona._conteo);
console.log(Persona.Conteo)