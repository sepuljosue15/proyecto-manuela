console.log("script.js cargado correctamente");

const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Hola! Gracias por visitar mi página.";
});