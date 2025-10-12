
class vehiculo {
    constructor(no_llantas, marca, color, anio) {
        this.no_llantas=no_llantas;
        this.marca = marca;
        this.color= color;
        this.anio=anio;
    }

    info() {
        console.log(`El vehículo tiene ${this.no_llantas} llantas, es marca ${this.marca} del año ${this.anio} y es de color ${this.color}.`);
    }

    antiguedad() {
        const anioActual = new Date().getFullYear();
        console.log(`El auto es de año ${this.anio}, entonces tiene ${anioActual-this.anio}`)
    }

    clasico () {
        if (this.anio < 1975) {
            console.log(`Tu auto marca ${this.marca} es considerado un clásico`);
        } else {
            console.log(`Tu auto no es un clásico`);
        }
    }
}

const a1 = new vehiculo(4,"Toyota","verde",1966)
a1.info()
a1.antiguedad()
a1.clasico()

