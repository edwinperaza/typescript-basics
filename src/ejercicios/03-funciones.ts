/*
    ===== Código de TypeScript =====
*/

function sumar (a: number, b: number) {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = sumar (10, 5);
// const resultado = multiplicar (10, 5);
// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    // console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Edwin",
    pv: 50,
    mostrarPV() {
        console.log("Mostrar puntos de vida con una funcion, total: ", this.pv);
    }
}

curar(nuevoPersonaje, 20)
nuevoPersonaje.mostrarPV()