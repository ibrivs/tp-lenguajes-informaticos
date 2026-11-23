/* MODO OSCURO- CLARO*/
const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        botonTema.textContent = "🌙 Modo oscuro";
    } else {
        botonTema.textContent = "☀️ Modo claro";
    }

});
