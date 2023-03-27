//Formulario de contacto

class Solicitud {
    constructor(nombrePx, apellidoPx, telefonoPx, emailPx, mensajePx) {
        this.nombrePx = nombrePx;
        this.apellidoPx = apellidoPx;
        this.telefonoPx = telefonoPx;
        this.emailPx = emailPx;
        this.mensajePx = mensajePx;
        this.cantidad = 1;
    }
}

const solicitudAlta = [];

console.log(solicitudAlta)


//Los datos que se encuentren en el localstorage, se agregaran al array vacio solicitud.

if (localStorage.getItem("solicitudAlta")) {
    let solicitud = JSON.parse(localStorage.getItem("solicitudAlta"));
    for (let i = 0; i < solicitud.length; i++) {
        solicitudAlta.push(solicitud[i]);
    }
}


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarSolicitud();
});

function agregarSolicitud() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const formulario = document.getElementById("formulario").value;
    const mensaje = document.getElementById("mensaje").value;
    /*if (nombre.length > 0 && apellido.length > 0 && telefono.length > 0 && email.length > 0) {
        formulario.innerHTML = "";*/
    const nuevaSolicitud = new Solicitud(nombre, apellido, telefono, email, mensaje, formulario);
    solicitudAlta.push(nuevaSolicitud);
    localStorage.setItem("solicitudAlta", JSON.stringify(solicitudAlta));
    // solicitud.guardar();
    
}

formulario.reset();
const contSolicitud = document.getElementById("contSolicitud");

const verSolicitud = document.getElementById("verSolicitud");

verSolicitud.addEventListener("click", () => {
    mostrarSolicitud();
});

function mostrarSolicitud() {
    contSolicitud.innerHTML = "";
    solicitudAlta.forEach((solicitud) => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <p>Nombre del Paciente: ${solicitud.nombrePx}</p>
                            <p>Apellido del Paciente: ${solicitud.apellidoPx}</p>
                            <p>Telefono del Paciente: ${solicitud.telefonoPx}</p>
                            <p>Email del Paciente: ${solicitud.emailPx}</p>
                            <p>Mensaje del Paciente: ${solicitud.mensajePx}</p>
                        </div>`;

        contSolicitud.appendChild(div);
    });
}


