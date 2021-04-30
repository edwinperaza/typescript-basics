class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    
    constructor(
        public alterEgo: string,
        public edad: number, 
        public nombreReal: string
    ) { 
        super(nombreReal, "NY");
    } // crea propiedad de la clase y el valor lo asigna
}

const ironMan = new Heroe("Ironman", 34, "Tony");

console.log(ironMan);