class Rectangulo{
    //*Para que sea una propiedad privada
    #area = 0;
    constructor(base =0, altura =0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

}
const resctangulo = new Rectangulo(10,15);

console.log(resctangulo);