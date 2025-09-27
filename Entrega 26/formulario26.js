function guardarLS(nombre, edad, dia) {
  const datos = {
    usuario: nombre || "",
    edad: edad || "",
    dia: dia || ""
  };
  localStorage.setItem("datosUs", JSON.stringify(datos));
  mostrarMensaje();
}

function bajarLS() {
  const datosGuardados = localStorage.getItem("datosUs");
  if (datosGuardados) {
    return JSON.parse(datosGuardados);
  } else {
    return null;
  }
}

function mostrarMensaje() {
  const datos = bajarLS();
  const mensaje = document.getElementById("mensaje");

  if (datos) {
    mensaje.textContent = `Hola ${datos.usuario}, tienes ${datos.edad} años y tu día favorito es ${datos.dia}.`;
  } else {
    mensaje.textContent = "";
  }
}

window.onload = mostrarMensaje;
