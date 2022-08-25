// Ejercicio 1
// Crea una función constructora llamada Persona que reciba 3 argumentos e inicialice un objeto con 3 propiedades: nombre, peso y altura.

// Agrega dos métodos a la función constructora Persona: saludar y bmi.

// saludar debe recibir un nombre y retornar el string "Hola , me llamo " donde es el argumento que se recibe y es la propiedad nombre del objeto.

// bmi no recibe ningún argumento y retorna el índice de masa corporal que se calcula con la siguiente fórmula:

function Persona(nombre,peso,altura){
    this.nombre = nombre
    this.peso = peso
    this.altura = altura

    this.saludar = function(name){
        return `Hola ${name}, me llamo ${this.nombre}`
    }
    this.bmi = function(){
        let masa = this.peso / (this.altura*this.altura);
        return `tu IMC es de ${masa}`
    }
 }
const pedro = new Persona("Pedro", 72, 1.5);
pedro.saludar("Maria"); 
pedro.bmi();