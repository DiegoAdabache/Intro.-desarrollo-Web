function insertarDato(clave, valor) {
  sessionStorage.setItem(clave, valor);
}

function existeDato(clave) {
  if (sessionStorage.getItem(clave) !== null) {
    console.log(`🔍 El dato si existe.`);
  } else {
    console.log(` El dato no existe.`);
  }
}

function obtenerDato(clave) {
  const valor = sessionStorage.getItem(clave);
  if (valor !== null) {
    console.log(`El dato es= ${valor}`);
  } else {
    console.log(` No se encontró la clave.`);
  }
}

function eliminarDato(clave) {
  if (sessionStorage.getItem(clave) !== null) {
    sessionStorage.removeItem(clave);
  } else {
    console.log(` No existe un dato con esa clave.`);
  }
}
