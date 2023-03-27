const botonInicioSesion = document.getElementById("botonInicioSesion");

const usuarioAutorizado = "admin";
const passwordAutorizado = "1234";


botonInicioSesion.addEventListener("click", function() {
    Swal.fire({
        title: `Bienvenido a Nutreteams!!!`, 
        html:' Ingrese a este ' +
        '<a href="pages/contacto.html">links</a> ' +
        'para <a href="pages/contacto.html"><b>Registrarse</b></a> o haga Click en <b>"Iniciar Sesion"</b> ',
        imageUrl: "img/logo-nutreteam3.jpg",
        showCancelButton: true,
        confirmButtonText: "Iniciar Sesion",
        confirmButtonColor: "#3b5998",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        closeOnCancel: false,
        backdrop: "#585858d8",
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire({
                title: 'Iniciar Sesion',
                html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
                <input type="password" id="password" class="swal2-input" placeholder="Password">`,
                confirmButtonText: 'Iniciar Sesion',
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false,
                backdrop: "#585858d8",
                focusConfirm: false,
                preConfirm: () => {
                    const login = Swal.getPopup().querySelector('#login').value
                    const password = Swal.getPopup().querySelector('#password').value
                    if (!login || !password) {
                    Swal.showValidationMessage(`Ingrese su Usuario y Contraseña`)
                    }
                    return { login: login, password: password }
                }
                }).then((result) => {
                Swal.fire(` Bienvenido a Nutreteams ${result.value.login} `.trim())
                })

    }
});
});

const botonCarrito = document.getElementById("botonCarrito");

botonCarrito.addEventListener("click", function() {
    Swal.fire({
        title: "Pagina en Reparación Nutreteams - Pedidos",
        icon: "warning",
        imageUrl: "img/carrito2.png",
        backdrop: "#585858d8",
        })
});

// Programacion Asincronica
const banner = document.getElementById("banner");

setTimeout(() => {
    banner.innerHTML ="";
}, 5000);

// FETCH
const foodNutrtition = "https://food-nutrition-information.p.rapidapi.com/food/1497465.json";

const novedades = document.getElementById("novedades");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84ec9fe879msh8519bde40786e01p1db6ffjsn7239436994e1',
		'X-RapidAPI-Host': 'food-nutrition-information.p.rapidapi.com'
	}
};

setInterval( () => {
    fetch(foodNutrtition, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

})
