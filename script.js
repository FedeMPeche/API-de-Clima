

const input = document.getElementById("search-input")
const button = document.getElementById("boton")
const div = document.getElementById("resultado")


button.addEventListener('click', function (event) {
    event.preventDefault()
    const key = "067936edef114d6183803508230109"
    const ciudad = input.value;
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${ciudad}&days=1&aqi=no&alerts=no`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const condicion = data.forecast.forecastday[0].day.condition.text;
             console.log(condicion);
            const temperatura = data.current.temp_c
            div.innerHTML = `
    <p><strong>Pais: </strong>${data.location.country}</p> 
    <p><strong>Ciudad: </strong>${data.location.name}</p>
    <p><strong>Temperatura Celcius: </strong>${temperatura}º ${temp(temperatura)}</p> 
    <p><strong>Clima actual: </strong>${iconos(condicion)}</p> 


    `
        })
        .catch(error => console.error('Error:', error));
});


function iconos(condicion) {
    if (condicion == "Sunny") { //soleado 
        return "Soleado ☀️";
    }
    else if (condicion == "Partly cloudy") { //Parcialmente nublado
        return " Parcialmente nublado 🌥️"
    } else if (condicion == "Moderate rain") { //Lluvia moderada
        return "Lluvia moderada 🌧️"
    } else if (condicion == "Patchy rain possible") { //Posible lluvia irregular
        return "Posible lluvia irregular 🌦️"
    }
    else if (condicion == "Rain") { //Lluvia intensa
        return "Lluvia intensa ⛈️"
    }
    else if (condicion == "Clear") { //Limpio
        return "Limpio 🌤️"
    }
    else if (condicion == "Moderate or heavy snow showers") { //Chubascos de nieve
        return "Chubascos de nieve ❄️"
    }
   
}

function temp(temperatura) {
    if (temperatura <= "10") {
        return "🥶"
        
    }
    else if (temperatura > "27") { 
        return "🥵"
    }
    else {
       return "😎"
    }
}


