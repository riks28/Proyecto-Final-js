// Obtener referencia a los elementos del DOM
const nombreInput = document.getElementById("nombre");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const resultadoP = document.getElementById("resultado");

// Función para calcular el IMC
function calcularIMC() {
	const altura = alturaInput.value / 100; // Convertir a metros
	const peso = pesoInput.value;
	const imc = peso / (altura * altura);
	return imc.toFixed(2); // Redondear a dos decimales
}

// Función para obtener el rango de IMC
function obtenerRangoIMC(imc) {
	const rangos = [
		{ rango: "Bajo peso", min: 0, max: 18.4 },
		{ rango: "Peso normal", min: 18.5, max: 24.9 },
		{ rango: "Sobrepeso", min: 25, max: 29.9 },
		{ rango: "Obesidad grado 1", min: 30, max: 34.9 },
		{ rango: "Obesidad grado 2", min: 35, max: 39.9 },
		{ rango: "Obesidad grado 3", min: 40, max: Infinity },
	];
	const rango = rangos.find((r) => r.min <= imc && imc <= r.max);
	return rango ? rango.rango : "";
}

// Función para mostrar el resultado en pantalla
function mostrarResultado() {
	const nombre = nombreInput.value;
	const imc = calcularIMC();
	const rangoIMC = obtenerRangoIMC(imc);

	// Mostrar el resultado en pantalla
	resultadoP.innerHTML = `Hola ${nombre}, tu índice de masa corporal es ${imc}. Esto corresponde a un ${rangoIMC}.`;

	// Guardar los datos en el storage
	const datos = { nombre, altura: alturaInput.value, peso: pesoInput.value, imc };
	localStorage.setItem("datos", JSON.stringify(datos));

	
}

// 
// Función para obtener los datos del usuario
function obtenerDatos() {
	const datos = JSON.parse(localStorage.getItem("datos"));
	const nombre = datos.nombre;
	const altura = datos.altura;
	const peso = datos.peso;
	const imc = datos.imc;

	// Recuperar información del localStorage
	nombreInput.value = nombre;
	alturaInput.value = altura;
	pesoInput.value = peso;
	imcInput.value = imc;
}


// Detectar el evento submit del formulario
document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault(); //Evito el comportamiento por default del formulario.
	mostrarResultado();
});

// Sweet Alert muestra Tabla de Rangos de IMC
const botonRangoImc = document.getElementById("botonRangoImc");

botonRangoImc.addEventListener("click", () => {
	Swal.fire({
		title:"Tabla de Rangos del IMC",
		html: `<table class="table">
        <thead>
        </thead>
        <tbody>
            <tr>
                <td>Bajo Peso</td>
                <td>Menor a 18.5</td>
            </tr>
            <tr>
                <td>Normal</td>
                <td>18.5 - 24.9</td>
            </tr>
            <tr>
                <td>Sobrepeso</td>
                <td>25 - 29.9</td>
            </tr>
            <tr>
                <td>Obesidad Tipo I</td>
                <td>30 - 34.9</td>
            </tr>
            <tr>
                <td>Obesidad Tipo II</td>
                <td>35 - 39.9</td>
            </tr>
            <tr>
                <td>Obesidad Tipo III</td>
                <td>Mayor a 40</td>
            </tr>
        </tbody>
    </table>`,
        backdrop: "#585858d8",
	})
});















