// Función que solicita el ingreso del precio de distintos productos
// y los almacena en un arreglo.
// Imprime el resultado del precio total en la consola,
// llamando a calcularTotalCompra para calcularlo
function solicitarIngresodeProductos(precios) {
    for (;;) {
        const ingresoUsuario = prompt("Ingrese el precio de un producto o \"total\" para visualizar el precio total");

        if (ingresoUsuario.toLowerCase() !== 'total') {
            precios.push(parseFloat(ingresoUsuario));
        } else {
            console.log(`El total de la compra de los productos ingresados es de ${calcularTotalDeCompra(precios)}`);
            break;
        }
    }
}

// Función que calcula el total de compra a partir de un arreglo de precios
// de productos.
function calcularTotalDeCompra(productos) {
    // Utilizamos el método reduce para acumular la suma de los precios:
    // el total de la compra en cada iteración es el primer parámetro,
    // y el segundo el precio en la posición correspondiente
    return productos.reduce((totalCompra, precio) => {
        return totalCompra + precio;
    })
}

solicitarIngresodeProductos(
    []
);

