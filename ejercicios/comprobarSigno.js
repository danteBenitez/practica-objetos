// Funcion que devuelve un mensaje indicando si un número es positivo,
// negativo, o cero
function comprobarSigno(numero) {
    if (numero > 0) {
        return `${numero} es positivo`;
    } else if (numero < 0) {
        return `${numero} es negativo`;
    } else {
        return `El número es 0`;
    }
}


// Pedimos al usuario que ingrese un número y lo almacenamos en una variable
// prompt devuelve un string, por lo que utilizamos parseFloat para obtener 
// un número
const numeroIngresado = parseFloat(prompt("Ingrese un número: "));

// Llamamos a la función comprobarSigno con el número ingresado y mostramos
// por consola el resultado
console.log(
    comprobarSigno(numeroIngresado)
)




