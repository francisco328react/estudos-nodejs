// HTTP E API BÁSICA
fetch('https://api.chucknorris.io/jokes/random')
.then((res) => res.json())
.then((json) => console.log(json))