const producto = {
    nombre: 'Paquete de fideos',
    precio: 200,
    cantidad: 3,
};

function calcularTotal(producto) {
    // El total a pagar es el precio * cantidad
    // Accedemos a las propiedades del producto utilizando 
    // la sintaxis objeto.propiedad
    return producto.precio * producto.cantidad;
}

console.log(
    calcularTotal(producto)
)

