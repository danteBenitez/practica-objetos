const persona = {
    nombre: 'Enrique Gonzalez',
    edad: 34,
    profesion: 'Arquitecto'
}

function presentarPersona(persona) {

    // Para realizar la presentación, mostramos los datos de la persona.
    // Utilizamos template strings para dar un formato adecuado
    console.log(`
        Le presento a ${persona.nombre},
        Es ${persona.profesion} y tiene ${persona.edad} años de edad
    `);
}

presentarPersona(persona);