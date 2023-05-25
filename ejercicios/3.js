// Funciones que realizan la conversión de grados Celsius a Fahrenheit 
// y viceversa
function convertirCelsiusAFahrenheit(celsius) {
    // La equivalencia entre ambas unidades es
    // gradoFahrenheit = 9/5 * gradoCelsius + 32
    return 9 / 5 * celsius + 32;
}

function convertirFahrenheitACelsius(fahrenheit) {
    // Por otro lado, se cumple que
    // gradoCelsius = (gradoFahrenheit - 32) * 5/9
    return (fahrenheit - 32) * 5/9;
}

// Solicitamos el ingreso de datos por parte del usuario
let unidadElegida = parseInt(prompt("Ingrese la unidad a la que desea convertir: (1) Celsius (2) Fahrenheit"));

const temperatura = parseFloat(prompt("Ingrese la temperatura a convertir: "));

// Dependiendo de la unidad elegida, imprimimos el mensaje correspondiente
switch (unidadElegida) {
    case 1:
        console.log(`${temperatura} °F equivale a ${convertirFahrenheitACelsius(temperatura)} °C`);
        break;
    case 2:
        console.log(`${temperatura} °C equivale a ${convertirCelsiusAFahrenheit(temperatura)} °F`);
        break;
    default: 
        console.log("Por favor ingrese un número válido.");
        break;    
}    