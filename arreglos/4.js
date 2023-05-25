function obtenerMaximo(arreglo) {

    // Math.max es un método que retorna el mayor de todos los números
    // que se le pasan como parámetros
    // Podemos usar el spread operator para pasar los elementos del arreglo
    // como parámetros diferentes a la función
    return Math.max(...arreglo);
}

console.log(
    obtenerMaximo([
        100,
        67,
        54,
        31,
        98,
        1000,
        10
    ])
)