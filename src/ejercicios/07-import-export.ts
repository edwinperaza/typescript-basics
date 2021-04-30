import { calcularISV, Producto } from './ejercicios/06-desestructuracion-funcion';


const carritoDeCompras: Producto[] = [
    {
        desc: "Telefono 1",
        precio: 100
    },
    {
        desc: "Telefono 2",
        precio: 150
    }
]

const [total, isv] = calcularISV(carritoDeCompras)

console.log("TOTAL: ", total);
console.log("ISV: ", isv);