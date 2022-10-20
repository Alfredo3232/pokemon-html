let pokemon = 'pikachu';

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
        let pokemonsList = document.getElementById('pokemons');
        pokemonsList.textContent = data.name.toUpperCase();

        let img = document.createElement('img');
        img.src = data.sprites.front_default;

        document.getElementById('lista').appendChild(img);
    });