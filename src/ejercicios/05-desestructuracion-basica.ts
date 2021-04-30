interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: 'Edwin',
        anio: 2000
    }
}

const autor = "Fulano";
const { volumen, segundo, cancion, detalles} = reproductor;
const {autor: autorDetalle} = detalles // luego de los dos puntos viene el nombre que le estoy dando a la variable

// console.log("El Volumen actual es: ", volumen)
// console.log("El Segundo actual es: ", segundo)
// console.log("La canción es: ", cancion)
// console.log("El autor es: ", autorDetalle)

const dbz: string[] = ["Goku", "Vegeta", "Trunks"]
const [, , p3] = dbz // es vacio cuando no se necesita el item de esa posición

// console.log("Personaje 1: ", p1)
// console.log("Personaje 2: ", p2)
console.log("Personaje 3: ", p3)