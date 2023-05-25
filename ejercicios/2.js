// Funcion que toma un número como parámetro y devuelve true si éste es primo
function esPrimo(numero) {
    // Un número es primo sólo si es mayor a 1 y es divisible solamente
    // por 1, por -1, por él mismo y por su opuesto

    // Si el número es menor o igual a 1, por nuestra definición no es primo
    if (numero <= 1) return false;
                    // ^ Ya que el cuerpo del if sólo contiene una instrucción,
                    // podemos obviar las llaves

    // Como los primos deben ser mayores a uno, 
    // debemos comprobar que numero no tiene divisores
    // desde 2 hasta numero - 1 inclusive
    for (let i = 2; i <= numero - 1; i++) {
        // Si num % i == 0, i es divisor de num, y por tanto no es primo
        if (numero % i == 0) {
            return false;
        }
    }

    // Si finalizamos el ciclo sin encontrar ningún divisor, 
    // el número debe ser primo
    return true;
}

// Solicitamos un número al usuario, usando parseInt para convertir
// el string a número
const numeroIngresado = parseInt(prompt("Ingrese un número: "));

// Dependiendo de si el número es primo, imprimimos un mensaje u otro

if (esPrimo(numeroIngresado)) {
    console.log(numeroIngresado, "es primo");
} else {
    console.log(numeroIngresado, "no es primo");
}