let persona = {
    nombre: 'Tony starck',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.036,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Huauua'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'MALIBU, CALIFORNIA'
    },
    //*Si se neceista que el nombre tenga espacio va entre comillas
    'Ultima pelicula': 'iron amn'
};
//*El objeto
console.log(persona);
console.log(persona.nombre);
console.log(persona.coords.lat);
//*Ultimo traje
console.log(persona.trajes[persona.trajes.length-1]);

const x = 'vivo';
console.log(persona[x]);
console.log(persona["Ultima pelicula"])

//* cambiar algun valor del objeto
persona.edad = 50;
console.log(persona);

//*Agregar valor el objeto
persona.dientes = 35;
console.log(persona);

//*Eliminar valor del objeto
delete persona.edad;
console.log(persona);

//*Congela el objeto y no deja modificar sus elemmentos priniciaples
//*Ya que los que estan dentro de los lmentos principlaes si deja modificar
persona.dinero = 1000;

console.log(persona);