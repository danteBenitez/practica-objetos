function obtenerPares(arregloDeNumeros) {

    // Para retornar un arreglo de solamente números pares,
    // utilizamos el método filter
    // Los números pares dejan resto cero al dividirlos entre 2;
    // o sea, cumplen que n % 2 == 0
    const soloPares = arregloDeNumeros.filter(n => n % 2 == 0);

    return soloPares;
}