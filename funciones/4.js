function generarNumeroAleatorio() {
    
    //El método Math.random() devuelve un número
    //aleatorio entre 0 y 1, excluyendo este último
    //Multiplicarlo por 11 resulta en un número entre 0 y 9
    const numeroDecimalAleatorio = Math.random() * 10;

    //El método Math.floor() retorna la parte entera
    //del número que se le pasa como parámetro
    //Sumamos 1 para que el intervalo sea entre 1 y 10 inclusive
    return Math.floor(numeroDecimalAleatorio) + 1;
}

console.log(
    generarNumeroAleatorio()
)