function obtenerSuma(arregloDeNumeros) {
    //Inicializamos la suma de los números en 0
    let suma = 0;

    //Iteramos sobre cada elemento con un indice i...
    for (let i = 0; i < arregloDeNumeros.length; i++) {
        //...y acumulamos el resultado de sumarlo 
        // en la variable correspondiete
        suma += arregloDeNumeros[i];
    }

    //Retornamos el resultado
    return suma;
}