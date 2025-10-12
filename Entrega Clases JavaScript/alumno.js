class alumno {
    constructor(nombre, carrera, ingreso, origen) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.ingreso = ingreso;
        this.origen=origen
    }

    info() {
        console.log(`La persona se llama ${this.nombre}, estudia ${this.carrera}, entró en ${this.ingreso} y es de ${this.origen}`)
    }
    anios() {
        const anioActual = new Date().getFullYear();
        console.log(`${this.nombre} lleva ${anioActual - this.ingreso} años en la universidad`);
    }
    foraneo() {
        if (this.origen == "CDMX") {
            console.log(`${this.nombre} es local`)
        } else {
            console.log(`${this.nombre} es foraneo y tiene hambre (ayuda)`)
        }
    }
}

const p1 = new alumno("Diego", "Matemáticas", 2020, "Zacatecas")
p1.info()
p1.anios()
p1.foraneo()
