class persona {
    constructor(nombre, edad, estado_civil, salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.estado_civil = estado_civil;
        this.salario=salario
    }

    info() {
        console.log(`La persona se llama ${this.nombre}, tiene ${this.edad} años y su estado civl es ${this.estado_civil}`)
    }
    nacimiento() {
        const anioActual = new Date().getFullYear();
        console.log(`${this.nombre} nació en ${anioActual - this.edad}`)
    }
    nivelSoc() {
        if (this.salario > 50000) {
            console.log(`${this.nombre} es considerado clase alta en México`)
        } else {
            console.log(`${this.nombre} no es clase alta en México`)
        }
    }
}

const p1 = new persona("Armando", 23, "casado", 23000)

p1.info()
p1.nacimiento()
p1.nivelSoc()
