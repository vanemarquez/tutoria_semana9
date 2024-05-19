// Crear un objeto persona con propiedades básicas.
let person = {
    nombre: 'Luis',
    edad: 33,
    ciudad: 'Lima',
}

//Acceder y mostrar propiedades del objeto.
console.log("La persona: " + person.nombre + " Vive en la ciudad de: " + person.ciudad)
//Acceder y mostrar propiedades del objeto.
console.log(`La persona: ${person.nombre} Vive en la ciudad de: ${person.ciudad}`);

//Añadir un objeto anidado dentro de persona.
let persona = {
    nombre: 'Luis',
    edad: 33,
    ciudad: 'Lima',
    peso: 90,
    info: {
        dni: 46613120,
        genero: 'masculino',
        estadocivil: 'C',
    }
}

let persona1 = {
    nombre: 'Rolando',
    edad: 41,
    ciudad: 'Ventanilla',
    info: {
        dni: 44152451,
        genero: 'masculino',
        estadocivil: 'S',
    },

    getEdad(){return this.edad}
    
}
console.log(`Mi hermano: ${persona1.nombre} Su estado civil es: ${persona1.info.estadocivil} y tiene ${persona1.getEdad()}`)

//Agregar y eliminar propiedades del objeto.
//Se agrega a persona1 el atributo peso//

persona1.trabajo = "programador";
console.log(persona1)

//Se elimina el atributo ciudad a persona1
delete persona1.ciudad
console.log(persona1)

//Usar la destructuración para acceder a propiedades
const { nombre, edad, ciudad } = persona;
console.log("nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);

//Congelar el objeto para evitar cambios
Object.freeze(persona);

persona.ciudad = `Ayacucho`
console.log(ciudad);

//Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades
Object.seal(persona);

//Unir dos objetos usando Object.assign y el operador spread

const persona3 = {}
console.log(persona3)
Object.assign(persona3, person)

console.log(`persona3`, persona3)

const persona4 = {...person} 
console.log(`persona4`, persona4)

//Recorrer el objeto usando Object.keys, Object.values y Object.entries

//Object.entries
const entries = Object.entries(person);
console.log('entries', entries)

//Object.keys - Object.values
entries.forEach(entry => {
  const [key, value] = entry;
  console.log(key + ': ' + value);
});

//De ser posible usar funciones con parámetros y con devolución (return)
function clonarObjeto(objetoOrigen, objetoDestino){
    Object.assign(objetoDestino,objetoOrigen)
    return objetoDestino
}

let persona5 = {}

console.log(`clonarObjeto`, clonarObjeto (persona1, persona5))
persona5 = this.clonarObjeto (persona1, persona5)
persona5.talla = 1.80
console.log(`persona5`, persona5)

