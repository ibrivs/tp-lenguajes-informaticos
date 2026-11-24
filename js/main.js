/* MODO OSCURO- CLARO*/
const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", () => {
    if (document.body.classList.contains("light-mode")) {
        activarModoOscuro();
        quitarAlerta();
    } else {
        mostrarAlertaModo();
        activarModoclaro();
    }
});

function activarModoclaro(){
    botonTema.textContent = "🌙 Modo oscuro";
    document.body.classList.add("light-mode");
    localStorage.setItem("modo", "claro");
}

function activarModoOscuro(){
    botonTema.textContent = "☀️ Modo claro";
    localStorage.setItem("modo", "oscuro");
    document.body.classList.remove("light-mode")
}

function verificarModo(){
    if(localStorage.getItem("modo") === "claro"){
        activarModoclaro()
    }
}

verificarModo();

// INDEX JS
const formIndex = document.getElementById("index-form");
const alertaIndex = document.getElementById("alerta-index");
const monstruosDia = ["monstruo","bruja"]
if(formIndex){
    
    formIndex.addEventListener("submit", (e) =>{
        e.preventDefault();
        const nombre = document.getElementById("input-nombre").value.trim();
        const especieSelect = document.getElementById("especie").value.trim();
        
        if(nombre === "" || especieSelect === ""){
            mostrarAlertaIndex();
            return;
        }
        if(monstruosDia.includes(especieSelect)){
            activarModoclaro();
        } else{
            activarModoOscuro();
        }
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("especie", especieSelect);

        window.location.href = "inicio.html";
    })

}
const alertaMonstruo = document.getElementById("alerta-monstruo");
const alertaEspecie = document.getElementById("especie-alerta");

function mostrarAlertaIndex(){
    alertaIndex.classList.toggle("d-none");
}
function mostrarAlertaModo(){
    if(alertaMonstruo){
        if(!monstruosDia.includes(localStorage.getItem("especie"))){
            alertaMonstruo.classList.remove("d-none");
            alertaEspecie.textContent = localStorage.getItem("especie")
        }
    }
}
function quitarAlerta(){
    if(alertaMonstruo){
        if(localStorage.getItem("modo") === "oscuro"){
            alertaMonstruo.classList.add("d-none");  
        }
    }
}

// INICIO JS

const inicioNombre = document.getElementById("bnv-nombre");

if(inicioNombre){
    inicioNombre.textContent = localStorage.getItem("nombre") ;
}
// CONTACTO JS

const alerta = document.getElementById("alert-contact");
const alertDiv = document.getElementById("alerta-div")
const formContact = document.getElementById("formulario-contacto");
const especieContacto = document.getElementById("especie-contacto");

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

    especieContacto.textContent = `y a ${localStorage.getItem("especie")}s`

}
function mostrarAlerta(errores){
    if(errores.length > 0){
        alerta.textContent = errores.join(" ");
        alertDiv.classList.remove("d-none");
    }
}

// NOTICIAS JS

const formNoticia = document.getElementById("formulario-noticia");
const alertaNoticia = document.getElementById("alerta-noticia");
const noticia = document.getElementById("noticia4");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const texto = document.getElementById("texto");
const fecha = document.getElementById("fecha");

if(formNoticia){
    formNoticia.addEventListener("submit", (e) => {
        e.preventDefault()

        const tituloNot = document.getElementById("noticia-titulo").value.trim();
        const subtituloNot = document.getElementById("noticia-subtitulo").value.trim();
        const infoNot = document.getElementById("informacion-noticia").value.trim();
        const fechaNot = document.getElementById("f-creacion").value.trim();

        if(tituloNot === "" || subtituloNot === "" || infoNot === "" || fechaNot === ""){
            alertaNoticia.classList.toggle("d-none");
            return;
        }

        noticia.classList.remove("d-none");
        titulo.textContent = tituloNot;
        subtitulo.textContent = subtituloNot;
        texto.textContent = infoNot;
        fecha.textContent = fechaNot;
        formNoticia.classList.toggle("d-none");
    })
}