function obtenerMaximo(arreglo) {

    // Para retornar el número máximo, podemos utilizar .reduce.
    // El acumulador será el número mayor encontrado hasta el momento,
    // y cada iteración lo comparará con el elemento actual
    return arreglo.reduce((maximo, num) => {
        //Si el número es mayor al maximo, el maximo pasa a ser ese número,
        // por lo que lo retornamos
        if (num > maximo) {
            return num;
        } else {
            // Si no, retornamos el maximo recibido
            return maximo;
        }
    })
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