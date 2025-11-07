// 1
function saludar_usuario(nombre) {

    return "Hola, " + nombre + "!  Bienvenido al curso de programación."

}

console.log(saludar_usuario("Martín"));


// 2
function repetir(texto, n) {
    return (texto + " ").repeat(n);
}

console.log(repetir("Ayuda", 5));


// 3
function invertir(palabra) {
    return palabra.split("").reverse().join("");
}

console.log(invertir("Ayuda"));


// 4
function vocales(palabra) {
    const vector = palabra.toLowerCase().split("");
    let contador = 0;
    for (let letra of vector) {
        if ("aeiou".includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(vocales("palabra"));

// 5

function mayus_minus(texto) {
    const may = texto.toUpperCase();
    const min = texto.toLowerCase();
    const tupla = [may,min];
    return tupla
}

console.log(mayus_minus("Me gusta mi clase"))

// 6

function promedios(numeros) {
    let contador = 0;
    let suma = 0;
    for (let num of numeros) {
        suma += num;
        contador++;
    }
    return suma/contador;
}

console.log(promedios([1,2,3,4,5]))

// 7

function max_min(numeros) {
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);
    const tupla = [max,min];
    return tupla;
}

console.log(max_min([1,2,3,4,5]))

// 8

function filtrar(numeros) {
    const pares = numeros.filter(num => num%2===0);
    return pares;
}

console.log(filtrar([1,2,3,4,5,6,7,8]))

// 9

function sumar_textos(textos) {
    return textos.join(" ");
}

console.log(sumar_textos(["Hola mi nombre", "es Diego", "Adabache, un gusto"]))

// 10

function buscar_elemento(lista, elemento) {
   return lista.includes(elemento);
}

console.log(buscar_elemento([1,2,3,4,5,67,8,9],0))

// 11

function contar_palabras(frases) {
    const palabras = frases.split(" ")
    return palabras.length
}

console.log(contar_palabras("Estoy contando palabras a lo tonto"))

// 12

function duplicar (lista) {
    const doble = lista.map(num => num*2);
    return doble;
}
console.log(duplicar([1,2,3,4,5,6,7]))

// 13

function capitalizar(texto) {
    return texto.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(" ");
}

console.log(capitalizar("hola, mi nombre es nombre y no sé dónde estoy"))

// 14

function mezclar(lista1,lista2) {
    const lista3 = [];
    const tamaño = Math.min(lista1.length,lista2.length);
    for (let i = 0; i < tamaño;) {
        lista3.push(lista1[i]);
        lista3.push(lista2[i]);
        i++
    }
    return lista3
}

console.log(mezclar([1,2,3,4],[7,8,9,10]))


// 15

function frecuencia(lista) {
  const diccionario = {};

  for (const elemento of lista) {
    if (diccionario[elemnto]) {
      diccionario[elemento] += 1;
    } else {
      diccionario[elemento] = 1;
    }
    }

    return diccionario;
}
