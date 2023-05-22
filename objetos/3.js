const persona = {
    nombre: 'Enrique Gonzalez',
    edad: 34,
    profesion: 'Arquitecto'
}

function esMayorEdad(persona) {
    // Una persona es mayor de edad si su edad es mayor o igual a 18
    // Accedemos a la propiedad correspondiente y retornamos el resultado
    // de comparar con 18 tal valor utilizando mayor o igual
    return persona.edad >= 18;
}