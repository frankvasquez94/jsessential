class Pantalla{

    // Propiedades
    constructor(marca, tamanio, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.tamanio = tamanio;
    }

    // Agregando mas propiedades
    set peso(kg){
        this.kg = kg;
    }

    get peso(){
        return this.kg;
    }


    // metodos

    info(){
        console.log(`La pantalla tiene las siguientes caracteristicas, modelo: ${this.modelo}, marca: ${this.marca}, tamanio: ${this.tamanio}`);
    }
}

var pantalla1 =  new Pantalla("Sansung", "24 plg", "Curvo");
pantalla1.peso = "10kg"
var pantalla2 =  new Pantalla("HP", "17 plg", "LCD");
pantalla2.peso = "8kg"