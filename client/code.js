let fetchPoke = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
            let pokemonsList = document.getElementById('pokemons');
            pokemonsList.textContent = data.name.toUpperCase();

            let img = document.createElement('img');
            img.src = data.sprites.front_default;

            document.getElementById('lista').appendChild(img);
        });
}



let addPoke = async (event) => {
    event.preventDefault();

    var input = document.getElementById("pokeTEXT");
    let text = input.value;

    await fetchPoke(text);

}


var form = document.getElementById("submitPokemon");

form.addEventListener("submit", addPoke, true);