function obtenerPromedioPonderado(arregloNotas, arregloPesos) {
    //El promedio ponderado es el resultado de sumar el producto de las notas
    // y el peso correspondiente, y dividir tal suma entre el número de notas

    // Primeramente, podemos mapear el arreglo de notas, a un arreglo de productos 
    // de cada nota con su peso
    // Para ello, utilizamos el hecho de que el segundo parámetro de map es el índice
    const arregloProductos = arregloNotas.map((nota, indice) => 
        nota * arregloPesos[indice]    
    )

    // Luego, debemos obtener la suma. Podemos utilizar el método .reduce.
    // Recibe un callback al que se le pasa un acumulador y cada elemento. 
    // El retorno se convierte en el acumulador que utilizará la siguiente iteración
    // Para sumar cada elemento, el callback suma al acumulador el elemento
    const sumaPonderada = arregloNotas.reduce(
        (acumulador, notaPonderada) => acumulador + notaPonderada
    )

    // Por tanto, sólo queda dividir por la longitud del arreglo
    return sumaPonderada / arregloNotas.length;
}