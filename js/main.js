
class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
    }

    getInfo(){
        console.log(`Numero de serie: ${this.numSerie}`);
    }
}

class Pantalla extends Producto{

    // Propiedades
    constructor(numSerie, marca, tamanio, modelo){
        super(numSerie);
        this.marca = marca;
        this.modelo = modelo;
        this.tamanio = tamanio;
    }

    // Agregando mas propiedades
    set peso(value){
        this.kg = value.trim();
    }

    get peso(){
        return this.kg;
    }


    // metodos

    static info(){
        console.log(`La pantalla tiene las siguientes caracteristicas, modelo: ${this.modelo}, marca: ${this.marca}, tamanio: ${this.tamanio}`);
    }
}

var pantalla1 =  new Pantalla("12345","Sansung", "24 plg", "Curvo");
pantalla1.peso = "10kg"
var pantalla2 =  new Pantalla("23456","HP", "17 plg", "LCD");
pantalla2.peso = "8kg"