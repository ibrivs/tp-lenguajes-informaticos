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

// INDEX JS
const nombre = document.getElementById("input-nombre");
const formIndex = document.getElementById("index-form");
const select = document.getElementById("especie");

if(formIndex){

    formIndex.addEventListener("submit", (e) =>{
        e.preventDefault();
    
        window.location.href = "inicio.html"
    })
}

// CONTACTO JS

const alerta = document.getElementById("alert-contact");
const alertDiv = document.getElementById("alerta-div")
const formContact = document.getElementById("formulario-contacto");

if(formContact){
    formContact.addEventListener("submit", (e) =>{
        e.preventDefault()
        const contacto =document.getElementById("contacto-nombre").value.trim();
        const mensaje =document.getElementById("mensaje-contacto").value.trim();
        const mail =document.getElementById("email-contacto").value.trim();

        errores = [];

        if(contacto.length < 3){
            errores.push("El nombre no puede estar vacio. ");
        }
        if(mensaje === ""){
            errores.push("El mensaje no puede estar vacio. ");
        }
        if(mail === ""){
            errores.push("La forma de comunicacion no puede estar vacia. ")
        }
        mostrarAlerta(errores);
    });
    function mostrarAlerta(errores){
        if(errores.length > 0){
            alerta.textContent = errores.join(" ");
            alertDiv.classList.remove("d-none");
        }
    }
}