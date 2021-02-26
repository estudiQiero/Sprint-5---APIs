window.onload = function () {
  tempsAvui(6167865);
}

const url = 'https://icanhazdadjoke.com';
const nouXist = document.querySelector('#nuevoChiste');

function sigChiste() {
  fetch(url, {
    // Sol.licitud d'API, capçelera
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      nouXist.textContent = response.joke;
      // nouXist.innerHTML = `${response.joke}
    }
    )
}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
const ciutat = "tarrega,ES";
const temps = 'https://api.openweathermap.org/data/2.5/weather?q=' + ciutat + '&units=metric&lang=ca&appid=eef7376e4f14c89b59d8f40eaf139db5';
const ubcacio = document.querySelector('#ubicacio');
const tempera = document.querySelector('#temperatura');
const condicions = document.querySelector('#condis');
// const iconaTemps = document.querySelector('#icona');

function tempsAvui() {
  fetch(temps, {
    // Sol.licitud d'API, capçelera
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {
      console.log(data);
      ubicacio.textContent = data.name;
      tempera.textContent = data.main.temp + "ºC";
      // iconaTemps.textContent = data.weather.icon;
      // condicions.textContent = data.weather[0];
    })
}