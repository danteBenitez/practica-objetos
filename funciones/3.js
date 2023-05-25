function esPalindromo(cadena) {
    //El método split de un string crea
    //un arreglo de cadenas generadas al 'cortar' la cadena original
    // en cada ocurrencia del string que se le pasa como argumento
    // Pasar una cadena vacía resulta en un arreglo de todos los caracteres
    // Invertimos el arreglo con .reverse() y unimos cada caracter
    // nuevamente con join(), que realiza lo opuesto a split
    const cadenaInvertida = cadena.split('').reverse().join('');

    return cadenaInvertida == cadena;
}

console.log(
    esPalindromo('radar')
)