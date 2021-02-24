const url = 'https://icanhazdadjoke.com';

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
            document.querySelector('#nuevoChiste').textContent = response.joke;
        }
        )
}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

