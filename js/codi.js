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

