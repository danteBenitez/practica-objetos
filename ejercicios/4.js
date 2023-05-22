function solicitarIngresodeProductos(productos) {
    do {
        let ingresoUsuario = prompt("Ingrese el precio de un producto o \"total\" para obtener el total de compra");

        productos.push(parseFloat(ingresoUsuario));

    } while (ingresoUsuario.toLowerCase() != "total");

    return calcularTotalDeCompra(productos);
}

function calcularTotalDeCompra(productos) {
    return productos.reduce((totalCompra, precio) => {

        return totalCompra + precio;
    })
}

solicitarIngresodeProductos([]);
