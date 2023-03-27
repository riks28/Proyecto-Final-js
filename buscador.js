// FETCH

const apiNutritionix = "https://www.nutritionix.com/business/api";

const contenedorNutritionix = document.getElementById("contenedorNutritionix");

fetch(apiNutritionix)
.then(response => response.json())
        .then(data => {
            const resultados = document.getElementById("resultados");
            resultados.innerHTML = `Nombre: ${data.hits[0].fields.item_name} <br> 
                                    Marca: ${data.hits[0].fields.brand_name} <br> 
                                    Calorías: ${data.hits[0].fields.nf_calories} <br> 
                                    Grasa total: ${data.hits[0].fields.nf_total_fat}`;
        })
        .catch(error => console.log(error));


        function buscar() {
            const APP_ID = "978a0007";
            const API_KEY = "dcac9ba7cbb2f67d3b967ebc70f1f607";
            const URL = `https://api.nutritionix.com/v1_1/search/chicken?results=0%3A1&fields=item_name%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=${APP_ID}&appKey=${API_KEY}`;
        
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    const resultados = document.getElementById("resultados");
                    resultados.innerHTML = `Nombre: ${data.hits[0].fields.item_name} <br> 
                                            Marca: ${data.hits[0].fields.brand_name} <br> 
                                            Calorías: ${data.hits[0].fields.nf_calories} <br> 
                                            Grasa total: ${data.hits[0].fields.nf_total_fat}`;
                })
                .catch(error => console.error(error));
        }
        

const formulario = document.getElementById("formulario");
const btnBuscar = document.getElementById("btnBuscar");

formulario.addEventListener("submit", e => {
    e.preventDefault();
    buscar();
});



