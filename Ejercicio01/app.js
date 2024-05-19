// Pedir al usuario que ingrese el primer número
let numero1 = parseFloat(prompt("Ingresa el primer número:"));

// Pedir al usuario que ingrese el segundo número
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Pedir al usuario que ingrese la operación a realizar
let operacion = prompt("Ingresa la operación a realizar (+, -, *, /, %):");

// Utilizar una estructura condicional para realizar la operación correspondiente
let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Error: división por cero";
    }
} else if (operacion === "%") {
    resultado = numero1 % numero2;
} else {
    resultado = "Operación no válida";
}

// Mostrar el resultado de la operación
alert("El resultado es: " + resultado);